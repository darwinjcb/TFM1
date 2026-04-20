// src/estado-actividad/infraestructura/estado-actividad.service.ts:
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ActualizarEstadoActividad,
  CrearEstadoActividad,
  EstadoActividad,
} from '../dominio/estado-actividad';
import { EstadoActividadRepository } from '../dominio/estado-actividad.repository';

@Injectable()
export class EstadoActividadService extends EstadoActividadRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearEstadoActividad): Promise<EstadoActividad> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    const estadoExistente = await this.prisma.estadoActividad.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (estadoExistente) {
      throw new BadRequestException(
        `El usuario con id ${data.idUsuario} ya tiene un estado de actividad`,
      );
    }

    return this.prisma.estadoActividad.create({
      data: {
        idUsuario: data.idUsuario,
        estaActivo: data.estaActivo ?? false,
        enLive: data.enLive ?? false,
        ultimaConexion: data.ultimaConexion
          ? new Date(data.ultimaConexion)
          : null,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findAll(): Promise<EstadoActividad[]> {
    return this.prisma.estadoActividad.findMany({
      include: {
        usuario: true,
      },
      orderBy: {
        idEstadoActividad: 'asc',
      },
    });
  }

  async findOne(idEstadoActividad: number): Promise<EstadoActividad> {
    const estado = await this.prisma.estadoActividad.findUnique({
      where: { idEstadoActividad },
      include: {
        usuario: true,
      },
    });

    if (!estado) {
      throw new NotFoundException(
        `No existe un estado de actividad con id ${idEstadoActividad}`,
      );
    }

    return estado;
  }

  async update(
    idEstadoActividad: number,
    data: ActualizarEstadoActividad,
  ): Promise<EstadoActividad> {
    const estadoExistente = await this.prisma.estadoActividad.findUnique({
      where: { idEstadoActividad },
    });

    if (!estadoExistente) {
      throw new NotFoundException(
        `No existe un estado de actividad con id ${idEstadoActividad}`,
      );
    }

    return this.prisma.estadoActividad.update({
      where: { idEstadoActividad },
      data: {
        estaActivo: data.estaActivo,
        enLive: data.enLive,
        ultimaConexion:
          data.ultimaConexion !== undefined
            ? data.ultimaConexion
              ? new Date(data.ultimaConexion)
              : null
            : undefined,
      },
      include: {
        usuario: true,
      },
    });
  }

  async remove(idEstadoActividad: number): Promise<EstadoActividad> {
    const estadoExistente = await this.prisma.estadoActividad.findUnique({
      where: { idEstadoActividad },
      include: {
        usuario: true,
      },
    });

    if (!estadoExistente) {
      throw new NotFoundException(
        `No existe un estado de actividad con id ${idEstadoActividad}`,
      );
    }

    await this.prisma.estadoActividad.delete({
      where: { idEstadoActividad },
    });

    return estadoExistente;
  }
}