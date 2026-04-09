// src/bloqueo/bloqueo.module.ts:
import { Module } from '@nestjs/common';
import { BloqueoService } from './bloqueo.service';
import { BloqueoController } from './bloqueo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BloqueoController],
  providers: [BloqueoService],
})
export class BloqueoModule { }