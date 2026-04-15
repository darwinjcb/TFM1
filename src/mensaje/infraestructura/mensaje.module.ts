// src/mensaje/infraestructura/mensaje/mensaje.module.ts:
import { Module } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { MensajeController } from './mensaje.controller';

@Module({
  controllers: [MensajeController],
  providers: [MensajeService],
})
export class MensajeModule { }
