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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planSuscripcionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanSuscripcionDto: UpdatePlanSuscripcionDto) {
    return this.planSuscripcionService.update(+id, updatePlanSuscripcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planSuscripcionService.remove(+id);
  }
}
