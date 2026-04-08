// src/plan-suscripcion/plan-suscripcion.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanSuscripcionDto } from './dto/create-plan-suscripcion.dto';
import { UpdatePlanSuscripcionDto } from './dto/update-plan-suscripcion.dto';

@Injectable()
export class PlanSuscripcionService {
  constructor(private readonly prisma: PrismaService) { }

  create(createPlanSuscripcionDto: CreatePlanSuscripcionDto) {
    return this.prisma.planSuscripcion.create({
      data: {
        ...createPlanSuscripcionDto,
      },
    });
  }

  findAll() {
    return this.prisma.planSuscripcion.findMany({
      orderBy: {
        idPlanSuscripcion: 'asc',
      },
    });
  }

  findOne(idPlanSuscripcion: number) {
    return this.prisma.planSuscripcion.findUnique({
      where: {
        idPlanSuscripcion,
      },
    });
  }

  update(
    idPlanSuscripcion: number,
    updatePlanSuscripcionDto: UpdatePlanSuscripcionDto,
  ) {
    return this.prisma.planSuscripcion.update({
      where: {
        idPlanSuscripcion,
      },
      data: {
        ...updatePlanSuscripcionDto,
      },
    });
  }

  remove(idPlanSuscripcion: number) {
    return this.prisma.planSuscripcion.delete({
      where: {
        idPlanSuscripcion,
      },
    });
  }
}