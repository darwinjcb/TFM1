// src/reporte/infraestructura/reporte.module.ts:
import { Module } from '@nestjs/common';
import { ReporteApplication } from '../aplicacion/reporte.application';
import { ReporteRepository } from '../dominio/reporte.repository';
import { ReporteController } from './reporte.controller';
import { ReporteService } from './reporte.service';

@Module({
  controllers: [ReporteController],
  providers: [
    ReporteApplication,
    ReporteService,
    {
      provide: ReporteRepository,
      useExisting: ReporteService,
    },
  ],
})
export class ReporteModule { }