// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion.module.ts:
import { Module } from '@nestjs/common';
import { ConfiguracionComunicacionApplication } from '../aplicacion/configuracion-comunicacion.application';
import { ConfiguracionComunicacionRepository } from '../dominio/configuracion-comunicacion.repository';
import { ConfiguracionComunicacionController } from './configuracion-comunicacion.controller';
import { ConfiguracionComunicacionService } from './configuracion-comunicacion.service';

@Module({
  controllers: [ConfiguracionComunicacionController],
  providers: [
    ConfiguracionComunicacionApplication,
    ConfiguracionComunicacionService,
    {
      provide: ConfiguracionComunicacionRepository,
      useExisting: ConfiguracionComunicacionService,
    },
  ],
})
export class ConfiguracionComunicacionModule { }