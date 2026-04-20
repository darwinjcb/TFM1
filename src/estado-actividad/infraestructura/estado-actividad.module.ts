// src/estado-actividad/infraestructura/estado-actividad.module.ts:
import { Module } from '@nestjs/common';
import { EstadoActividadService } from './estado-actividad.service';
import { EstadoActividadController } from './estado-actividad.controller';

@Module({
  controllers: [EstadoActividadController],
  providers: [EstadoActividadService],
})
export class EstadoActividadModule { }
