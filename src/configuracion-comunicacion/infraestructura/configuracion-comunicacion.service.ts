// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarConfiguracionComunicacion, ConfiguracionComunicacion, CrearConfiguracionComunicacion, } from '../dominio/configuracion-comunicacion';
import { ConfiguracionComunicacionRepository } from '../dominio/configuracion-comunicacion.repository';

@Injectable()
export class ConfiguracionComunicacionService
  extends ConfiguracionComunicacionRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(
    data: CrearConfiguracionComunicacion,
  ): Promise<ConfiguracionComunicacion> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    const configuracionExistente =
      await this.prisma.configuracionComunicacion.findUnique({
        where: { idUsuario: data.idUsuario },
      });

    if (configuracionExistente) {
      throw new BadRequestException(
        `El usuario con id ${data.idUsuario} ya tiene una configuración de comunicación`,
      );
    }

    return this.prisma.configuracionComunicacion.create({
      data: {
        idUsuario: data.idUsuario,
        permiteMensajes: data.permiteMensajes ?? true,
        requiereMatchParaChatear:
          data.requiereMatchParaChatear ?? true,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findAll(): Promise<ConfiguracionComunicacion[]> {
    return this.prisma.configuracionComunicacion.findMany({
      include: {
        usuario: true,
      },
      orderBy: {
        idConfiguracionComunicacion: 'asc',
      },
    });
  }

  async findOne(
    idConfiguracionComunicacion: number,
  ): Promise<ConfiguracionComunicacion> {
    const configuracion =
      await this.prisma.configuracionComunicacion.findUnique({
        where: { idConfiguracionComunicacion },
        include: {
          usuario: true,
        },
      });

    if (!configuracion) {
      throw new NotFoundException(
        `No existe una configuración de comunicación con id ${idConfiguracionComunicacion}`,
      );
    }

    return configuracion;
  }

  async update(
    idConfiguracionComunicacion: number,
    data: ActualizarConfiguracionComunicacion,
  ): Promise<ConfiguracionComunicacion> {
    const configuracionExistente =
      await this.prisma.configuracionComunicacion.findUnique({
        where: { idConfiguracionComunicacion },
      });

    if (!configuracionExistente) {
      throw new NotFoundException(
        `No existe una configuración de comunicación con id ${idConfiguracionComunicacion}`,
      );
    }

    return this.prisma.configuracionComunicacion.update({
      where: { idConfiguracionComunicacion },
      data: {
        permiteMensajes: data.permiteMensajes,
        requiereMatchParaChatear: data.requiereMatchParaChatear,
      },
      include: {
        usuario: true,
      },
    });
  }

  async remove(
    idConfiguracionComunicacion: number,
  ): Promise<ConfiguracionComunicacion> {
    const configuracionExistente =
      await this.prisma.configuracionComunicacion.findUnique({
        where: { idConfiguracionComunicacion },
        include: {
          usuario: true,
        },
      });

    if (!configuracionExistente) {
      throw new NotFoundException(
        `No existe una configuración de comunicación con id ${idConfiguracionComunicacion}`,
      );
    }

    await this.prisma.configuracionComunicacion.delete({
      where: { idConfiguracionComunicacion },
    });

    return configuracionExistente;
  }
}