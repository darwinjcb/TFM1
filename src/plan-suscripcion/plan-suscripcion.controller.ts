// src/plan-suscripcion/plan-suscripcion.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanSuscripcionService } from './plan-suscripcion.service';
import { CreatePlanSuscripcionDto } from './dto/create-plan-suscripcion.dto';
import { UpdatePlanSuscripcionDto } from './dto/update-plan-suscripcion.dto';

@Controller('plan-suscripcion')
export class PlanSuscripcionController {
  constructor(private readonly planSuscripcionService: PlanSuscripcionService) { }

  @Post()
  create(@Body() createPlanSuscripcionDto: CreatePlanSuscripcionDto) {
    return this.planSuscripcionService.create(createPlanSuscripcionDto);
  }

  @Get()
  findAll() {
    return this.planSuscripcionService.findAll();
  }

  @Get(':idPlanSuscripcion')
  findOne(@Param('idPlanSuscripcion') idPlanSuscripcion: string) {
    return this.planSuscripcionService.findOne(+idPlanSuscripcion);
  }

  @Patch(':idPlanSuscripcion')
  update(
    @Param('idPlanSuscripcion') idPlanSuscripcion: string,
    @Body() updatePlanSuscripcionDto: UpdatePlanSuscripcionDto,
  ) {
    return this.planSuscripcionService.update(+idPlanSuscripcion, updatePlanSuscripcionDto);
  }

  @Delete(':idPlanSuscripcion')
  remove(@Param('idPlanSuscripcion') idPlanSuscripcion: string) {
    return this.planSuscripcionService.remove(+idPlanSuscripcion);
  }
}