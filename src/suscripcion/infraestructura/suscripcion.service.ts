// src/suscripcion/infraestructura/suscripcion.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarSuscripcionUsuario, CrearSuscripcionUsuario, SuscripcionUsuario, } from '../dominio/suscripcion';
import { SuscripcionRepository } from '../dominio/suscripcion.repository';

@Injectable()
export class SuscripcionService extends SuscripcionRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(
    data: CrearSuscripcionUsuario,
  ): Promise<SuscripcionUsuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    const plan = await this.prisma.planSuscripcion.findUnique({
      where: { idPlanSuscripcion: data.idPlanSuscripcion },
    });

    if (!plan) {
      throw new NotFoundException(
        `No existe un plan de suscripción con id ${data.idPlanSuscripcion}`,
      );
    }

    const suscripcionExistente =
      await this.prisma.suscripcionUsuario.findUnique({
        where: { idUsuario: data.idUsuario },
      });

    if (suscripcionExistente) {
      throw new BadRequestException(
        `El usuario con id ${data.idUsuario} ya tiene una suscripción registrada`,
      );
    }

    return this.prisma.suscripcionUsuario.create({
      data: {
        idUsuario: data.idUsuario,
        idPlanSuscripcion: data.idPlanSuscripcion,
        fechaFin: data.fechaFin ? new Date(data.fechaFin) : null,
        activa: data.activa ?? true,
      },
      include: {
        usuario: true,
        planSuscripcion: true,
      },
    });
  }

  async findAll(): Promise<SuscripcionUsuario[]> {
    return this.prisma.suscripcionUsuario.findMany({
      include: {
        usuario: true,
        planSuscripcion: true,
      },
      orderBy: {
        idSuscripcionUsuario: 'asc',
      },
    });
  }

  async findOne(
    idSuscripcionUsuario: number,
  ): Promise<SuscripcionUsuario> {
    const suscripcion = await this.prisma.suscripcionUsuario.findUnique({
      where: { idSuscripcionUsuario },
      include: {
        usuario: true,
        planSuscripcion: true,
      },
    });

    if (!suscripcion) {
      throw new NotFoundException(
        `No existe una suscripción con id ${idSuscripcionUsuario}`,
      );
    }

    return suscripcion;
  }

  async update(
    idSuscripcionUsuario: number,
    data: ActualizarSuscripcionUsuario,
  ): Promise<SuscripcionUsuario> {
    const suscripcionExistente =
      await this.prisma.suscripcionUsuario.findUnique({
        where: { idSuscripcionUsuario },
      });

    if (!suscripcionExistente) {
      throw new NotFoundException(
        `No existe una suscripción con id ${idSuscripcionUsuario}`,
      );
    }

    if (data.idPlanSuscripcion !== undefined) {
      const plan = await this.prisma.planSuscripcion.findUnique({
        where: { idPlanSuscripcion: data.idPlanSuscripcion },
      });

      if (!plan) {
        throw new NotFoundException(
          `No existe un plan de suscripción con id ${data.idPlanSuscripcion}`,
        );
      }
    }

    return this.prisma.suscripcionUsuario.update({
      where: { idSuscripcionUsuario },
      data: {
        idPlanSuscripcion: data.idPlanSuscripcion,
        fechaFin:
          data.fechaFin !== undefined
            ? data.fechaFin
              ? new Date(data.fechaFin)
              : null
            : undefined,
        activa: data.activa,
      },
      include: {
        usuario: true,
        planSuscripcion: true,
      },
    });
  }

  async remove(
    idSuscripcionUsuario: number,
  ): Promise<SuscripcionUsuario> {
    const suscripcionExistente =
      await this.prisma.suscripcionUsuario.findUnique({
        where: { idSuscripcionUsuario },
      });

    if (!suscripcionExistente) {
      throw new NotFoundException(
        `No existe una suscripción con id ${idSuscripcionUsuario}`,
      );
    }

    return this.prisma.suscripcionUsuario.delete({
      where: { idSuscripcionUsuario },
    });
  }
}