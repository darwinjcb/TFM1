// src/mensaje/infraestructura/mensaje.module.ts:
import { Module } from '@nestjs/common';
import { MensajeApplication } from '../aplicacion/mensaje.application';
import { MensajeRepository } from '../dominio/mensaje.repository';
import { MensajeController } from './mensaje.controller';
import { MensajeService } from './mensaje.service';

@Module({
  controllers: [MensajeController],
  providers: [
    MensajeApplication,
    MensajeService,
    {
      provide: MensajeRepository,
      useExisting: MensajeService,
    },
  ],
})
export class MensajeModule { }