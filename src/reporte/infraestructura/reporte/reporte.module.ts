// src/reporte/infraestructura/reporte/reporte.module.ts:
import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';

@Module({
  controllers: [ReporteController],
  providers: [ReporteService],
})
export class ReporteModule { }
