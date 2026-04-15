// src/suscripcion/infraestructura/suscripcion.service.ts:
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSuscripcionDto } from './create-suscripcion.dto';
import { UpdateSuscripcionDto } from './update-suscripcion.dto';

@Injectable()
export class SuscripcionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createSuscripcionDto: CreateSuscripcionDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: createSuscripcionDto.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${createSuscripcionDto.idUsuario}`,
      );
    }

    const plan = await this.prisma.planSuscripcion.findUnique({
      where: { idPlanSuscripcion: createSuscripcionDto.idPlanSuscripcion },
    });

    if (!plan) {
      throw new NotFoundException(
        `No existe un plan de suscripción con id ${createSuscripcionDto.idPlanSuscripcion}`,
      );
    }

    const suscripcionExistente = await this.prisma.suscripcionUsuario.findUnique({
      where: { idUsuario: createSuscripcionDto.idUsuario },
    });

    if (suscripcionExistente) {
      throw new BadRequestException(
        `El usuario con id ${createSuscripcionDto.idUsuario} ya tiene una suscripción registrada`,
      );
    }

    return this.prisma.suscripcionUsuario.create({
      data: {
        idUsuario: createSuscripcionDto.idUsuario,
        idPlanSuscripcion: createSuscripcionDto.idPlanSuscripcion,
        fechaFin: createSuscripcionDto.fechaFin
          ? new Date(createSuscripcionDto.fechaFin)
          : null,
        activa: createSuscripcionDto.activa ?? true,
      },
      include: {
        usuario: true,
        planSuscripcion: true,
      },
    });
  }

  async findAll() {
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

  async findOne(idSuscripcionUsuario: number) {
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
    updateSuscripcionDto: UpdateSuscripcionDto,
  ) {
    const suscripcionExistente = await this.prisma.suscripcionUsuario.findUnique({
      where: { idSuscripcionUsuario },
    });

    if (!suscripcionExistente) {
      throw new NotFoundException(
        `No existe una suscripción con id ${idSuscripcionUsuario}`,
      );
    }

    if (updateSuscripcionDto.idPlanSuscripcion !== undefined) {
      const plan = await this.prisma.planSuscripcion.findUnique({
        where: { idPlanSuscripcion: updateSuscripcionDto.idPlanSuscripcion },
      });

      if (!plan) {
        throw new NotFoundException(
          `No existe un plan de suscripción con id ${updateSuscripcionDto.idPlanSuscripcion}`,
        );
      }
    }

    return this.prisma.suscripcionUsuario.update({
      where: { idSuscripcionUsuario },
      data: {
        idPlanSuscripcion: updateSuscripcionDto.idPlanSuscripcion,
        fechaFin:
          updateSuscripcionDto.fechaFin !== undefined
            ? updateSuscripcionDto.fechaFin
              ? new Date(updateSuscripcionDto.fechaFin)
              : null
            : undefined,
        activa: updateSuscripcionDto.activa,
      },
      include: {
        usuario: true,
        planSuscripcion: true,
      },
    });
  }

  async remove(idSuscripcionUsuario: number) {
    const suscripcionExistente = await this.prisma.suscripcionUsuario.findUnique({
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