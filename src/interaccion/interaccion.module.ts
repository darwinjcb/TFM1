// src/interaccion/interaccion.module.ts:
import { Module } from '@nestjs/common';
import { InteraccionService } from './interaccion.service';
import { InteraccionController } from './interaccion.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InteraccionController],
  providers: [InteraccionService],
})
export class InteraccionModule { }