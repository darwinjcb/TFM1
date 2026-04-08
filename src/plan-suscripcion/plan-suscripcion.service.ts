// src/plan-suscripcion/plan-suscripcion.service.ts:
import { Injectable } from '@nestjs/common';
import { CreatePlanSuscripcionDto } from './dto/create-plan-suscripcion.dto';
import { UpdatePlanSuscripcionDto } from './dto/update-plan-suscripcion.dto';

@Injectable()
export class PlanSuscripcionService {
  create(createPlanSuscripcionDto: CreatePlanSuscripcionDto) {
    return 'This action adds a new planSuscripcion';
  }

  findAll() {
    return `This action returns all planSuscripcion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planSuscripcion`;
  }

  update(id: number, updatePlanSuscripcionDto: UpdatePlanSuscripcionDto) {
    return `This action updates a #${id} planSuscripcion`;
  }

  remove(id: number) {
    return `This action removes a #${id} planSuscripcion`;
  }
}
