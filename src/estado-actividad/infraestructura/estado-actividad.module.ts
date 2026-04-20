// src/estado-actividad/infraestructura/estado-actividad.module.ts:
import { Module } from '@nestjs/common';
import { EstadoActividadApplication } from '../aplicacion/estado-actividad.application';
import { EstadoActividadRepository } from '../dominio/estado-actividad.repository';
import { EstadoActividadController } from './estado-actividad.controller';
import { EstadoActividadService } from './estado-actividad.service';

@Module({
  controllers: [EstadoActividadController],
  providers: [
    EstadoActividadApplication,
    EstadoActividadService,
    {
      provide: EstadoActividadRepository,
      useExisting: EstadoActividadService,
    },
  ],
})
export class EstadoActividadModule { }