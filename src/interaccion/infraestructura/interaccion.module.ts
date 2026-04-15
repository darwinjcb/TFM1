// src/interaccion/infraestructura/interaccion.module.ts:
import { Module } from '@nestjs/common';
import { InteraccionApplication } from '../aplicacion/interaccion.application';
import { InteraccionRepository } from '../dominio/interaccion.repository';
import { InteraccionController } from './interaccion.controller';
import { InteraccionService } from './interaccion.service';

@Module({
  controllers: [InteraccionController],
  providers: [
    InteraccionApplication,
    InteraccionService,
    {
      provide: InteraccionRepository,
      useExisting: InteraccionService,
    },
  ],
})
export class InteraccionModule { }