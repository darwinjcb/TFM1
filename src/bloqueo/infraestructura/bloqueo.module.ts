// src/bloqueo/infraestructura/bloqueo.module.ts:
import { Module } from '@nestjs/common';
import { BloqueoApplication } from '../aplicacion/bloqueo.application';
import { BloqueoRepository } from '../dominio/bloqueo.repository';
import { BloqueoController } from './bloqueo.controller';
import { BloqueoService } from './bloqueo.service';

@Module({
  controllers: [BloqueoController],
  providers: [
    BloqueoApplication,
    BloqueoService,
    {
      provide: BloqueoRepository,
      useExisting: BloqueoService,
    },
  ],
})
export class BloqueoModule { }