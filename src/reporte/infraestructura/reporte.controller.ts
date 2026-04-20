// src/reporte/infraestructura/reporte.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReporteApplication } from '../aplicacion/reporte.application';
import { CreateReporteDto } from './create-reporte.dto';
import { UpdateReporteDto } from './update-reporte.dto';

@Controller('reporte')
export class ReporteController {
  constructor(private readonly reporteApplication: ReporteApplication) { }

  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteApplication.create(createReporteDto);
  }

  @Get()
  findAll() {
    return this.reporteApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReporteDto: UpdateReporteDto) {
    return this.reporteApplication.update(Number(id), updateReporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteApplication.remove(Number(id));
  }
}