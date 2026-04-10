// src/reporte/reporte.module.ts:
import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReporteController],
  providers: [ReporteService],
})
export class ReporteModule { }