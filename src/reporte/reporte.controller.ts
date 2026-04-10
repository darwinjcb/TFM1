// src/reporte/reporte.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reporte')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) { }

  @Post()
  create(@Body() createReporteDto: CreateReporteDto) {
    return this.reporteService.create(createReporteDto);
  }

  @Get()
  findAll() {
    return this.reporteService.findAll();
  }

  @Get(':idReporte')
  findOne(@Param('idReporte') idReporte: string) {
    return this.reporteService.findOne(+idReporte);
  }

  @Patch(':idReporte')
  update(
    @Param('idReporte') idReporte: string,
    @Body() updateReporteDto: UpdateReporteDto,
  ) {
    return this.reporteService.update(+idReporte, updateReporteDto);
  }

  @Delete(':idReporte')
  remove(@Param('idReporte') idReporte: string) {
    return this.reporteService.remove(+idReporte);
  }
}