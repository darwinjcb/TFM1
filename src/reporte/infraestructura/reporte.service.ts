// src/reporte/infraestructura/reporte.service.ts:
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarReporte, CrearReporte, Reporte } from '../dominio/reporte';
import { ReporteRepository } from '../dominio/reporte.repository';

@Injectable()
export class ReporteService extends ReporteRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearReporte): Promise<Reporte> {
    if (data.idUsuarioReportador === data.idUsuarioReportado) {
      throw new BadRequestException(
        'Un usuario no puede reportarse a sí mismo',
      );
    }

    const usuarioReportador = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioReportador },
    });

    if (!usuarioReportador) {
      throw new NotFoundException(
        `No existe un usuario reportador con id ${data.idUsuarioReportador}`,
      );
    }

    const usuarioReportado = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioReportado },
    });

    if (!usuarioReportado) {
      throw new NotFoundException(
        `No existe un usuario reportado con id ${data.idUsuarioReportado}`,
      );
    }

    return this.prisma.reporte.create({
      data: {
        idUsuarioReportador: data.idUsuarioReportador,
        idUsuarioReportado: data.idUsuarioReportado,
        descripcion: data.descripcion,
      },
      include: {
        usuarioReportador: true,
        usuarioReportado: true,
      },
    });
  }

  async findAll(): Promise<Reporte[]> {
    return this.prisma.reporte.findMany({
      include: {
        usuarioReportador: true,
        usuarioReportado: true,
      },
      orderBy: {
        idReporte: 'asc',
      },
    });
  }

  async findOne(idReporte: number): Promise<Reporte> {
    const reporte = await this.prisma.reporte.findUnique({
      where: { idReporte },
      include: {
        usuarioReportador: true,
        usuarioReportado: true,
      },
    });

    if (!reporte) {
      throw new NotFoundException(`No existe un reporte con id ${idReporte}`);
    }

    return reporte;
  }

  async update(
    idReporte: number,
    data: ActualizarReporte,
  ): Promise<Reporte> {
    const reporteExistente = await this.prisma.reporte.findUnique({
      where: { idReporte },
    });

    if (!reporteExistente) {
      throw new NotFoundException(`No existe un reporte con id ${idReporte}`);
    }

    return this.prisma.reporte.update({
      where: { idReporte },
      data: {
        descripcion: data.descripcion,
      },
      include: {
        usuarioReportador: true,
        usuarioReportado: true,
      },
    });
  }

  async remove(idReporte: number): Promise<Reporte> {
    const reporteExistente = await this.prisma.reporte.findUnique({
      where: { idReporte },
      include: {
        usuarioReportador: true,
        usuarioReportado: true,
      },
    });

    if (!reporteExistente) {
      throw new NotFoundException(`No existe un reporte con id ${idReporte}`);
    }

    await this.prisma.reporte.delete({
      where: { idReporte },
    });

    return reporteExistente;
  }
}