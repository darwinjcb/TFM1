// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion.module.ts:
import { Module } from '@nestjs/common';
import { ConfiguracionComunicacionService } from './configuracion-comunicacion.service';
import { ConfiguracionComunicacionController } from './configuracion-comunicacion.controller';

@Module({
  controllers: [ConfiguracionComunicacionController],
  providers: [ConfiguracionComunicacionService],
})
export class ConfiguracionComunicacionModule { }
