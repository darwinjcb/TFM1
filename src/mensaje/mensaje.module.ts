// src/mensaje/mensaje.module.ts:
import { Module } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { MensajeController } from './mensaje.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MensajeController],
  providers: [MensajeService],
})
export class MensajeModule { }