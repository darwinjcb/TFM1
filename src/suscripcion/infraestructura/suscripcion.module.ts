// src/suscripcion/infraestructura/suscripcion/suscripcion.module.ts:
import { Module } from '@nestjs/common';
import { SuscripcionApplication } from '../aplicacion/suscripcion.application';
import { SuscripcionRepository } from '../dominio/suscripcion.repository';
import { SuscripcionController } from './suscripcion.controller';
import { SuscripcionService } from './suscripcion.service';

@Module({
  controllers: [SuscripcionController],
  providers: [
    SuscripcionApplication,
    SuscripcionService,
    {
      provide: SuscripcionRepository,
      useExisting: SuscripcionService,
    },
  ],
})
export class SuscripcionModule { }