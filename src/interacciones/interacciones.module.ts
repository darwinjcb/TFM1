// src/interacciones/interacciones.module.ts:
import { Module } from '@nestjs/common';
import { InteraccionesController } from './interacciones.controller';
import { InteraccionesService } from './interacciones.service';

@Module({
  controllers: [InteraccionesController],
  providers: [InteraccionesService]
})
export class InteraccionesModule { }
