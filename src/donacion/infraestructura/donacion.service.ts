// src/donacion/infraestructura/donacion.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarDonacion, CrearDonacion, Donacion, } from '../dominio/donacion';
import { DonacionRepository } from '../dominio/donacion.repository';

@Injectable()
export class DonacionService extends DonacionRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearDonacion): Promise<Donacion> {
    if (data.idUsuarioEmisor === data.idUsuarioReceptor) {
      throw new BadRequestException(
        'Un usuario no puede donarse a sí mismo',
      );
    }

    if (data.monto <= 0) {
      throw new BadRequestException(
        'El monto de la donación debe ser mayor que cero',
      );
    }

    const usuarioEmisor = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioEmisor },
    });

    if (!usuarioEmisor) {
      throw new NotFoundException(
        `No existe un usuario emisor con id ${data.idUsuarioEmisor}`,
      );
    }

    const usuarioReceptor = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioReceptor },
    });

    if (!usuarioReceptor) {
      throw new NotFoundException(
        `No existe un usuario receptor con id ${data.idUsuarioReceptor}`,
      );
    }

    return this.prisma.donacion.create({
      data: {
        idUsuarioEmisor: data.idUsuarioEmisor,
        idUsuarioReceptor: data.idUsuarioReceptor,
        monto: data.monto,
        mensaje: data.mensaje,
        estadoDonacion: data.estadoDonacion ?? 'PENDIENTE',
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async findAll(): Promise<Donacion[]> {
    return this.prisma.donacion.findMany({
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
      orderBy: {
        idDonacion: 'asc',
      },
    });
  }

  async findOne(idDonacion: number): Promise<Donacion> {
    const donacion = await this.prisma.donacion.findUnique({
      where: { idDonacion },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });

    if (!donacion) {
      throw new NotFoundException(
        `No existe una donación con id ${idDonacion}`,
      );
    }

    return donacion;
  }

  async update(
    idDonacion: number,
    data: ActualizarDonacion,
  ): Promise<Donacion> {
    const donacionExistente = await this.prisma.donacion.findUnique({
      where: { idDonacion },
    });

    if (!donacionExistente) {
      throw new NotFoundException(
        `No existe una donación con id ${idDonacion}`,
      );
    }

    if (data.monto !== undefined && data.monto <= 0) {
      throw new BadRequestException(
        'El monto de la donación debe ser mayor que cero',
      );
    }

    return this.prisma.donacion.update({
      where: { idDonacion },
      data: {
        monto: data.monto,
        mensaje: data.mensaje,
        estadoDonacion: data.estadoDonacion,
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async remove(idDonacion: number): Promise<Donacion> {
    const donacionExistente = await this.prisma.donacion.findUnique({
      where: { idDonacion },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });

    if (!donacionExistente) {
      throw new NotFoundException(
        `No existe una donación con id ${idDonacion}`,
      );
    }

    await this.prisma.donacion.delete({
      where: { idDonacion },
    });

    return donacionExistente;
  }
}