// src/interaccion/infraestructura/interaccion.module.ts:
import { Module } from '@nestjs/common';
import { InteraccionService } from './interaccion.service';
import { InteraccionController } from './interaccion.controller';

@Module({
  controllers: [InteraccionController],
  providers: [InteraccionService],
})
export class InteraccionModule { }