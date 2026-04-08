// src/plan-suscripcion/plan-suscripcion.module.ts:
import { Module } from '@nestjs/common';
import { PlanSuscripcionService } from './plan-suscripcion.service';
import { PlanSuscripcionController } from './plan-suscripcion.controller';

@Module({
  controllers: [PlanSuscripcionController],
  providers: [PlanSuscripcionService],
})
export class PlanSuscripcionModule { }
