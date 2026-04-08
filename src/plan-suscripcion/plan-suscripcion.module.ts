// src/plan-suscripcion/plan-suscripcion.module.ts:
import { Module } from '@nestjs/common';
import { PlanSuscripcionService } from './plan-suscripcion.service';
import { PlanSuscripcionController } from './plan-suscripcion.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanSuscripcionController],
  providers: [PlanSuscripcionService],
})
export class PlanSuscripcionModule { }