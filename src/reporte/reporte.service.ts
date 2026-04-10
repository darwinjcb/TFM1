// src/reporte/reporte.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Injectable()
export class ReporteService {
  constructor(private readonly prisma: PrismaService) { }

  create(createReporteDto: CreateReporteDto) {
    return this.prisma.reporte.create({
      data: {
        ...createReporteDto,
      },
    });
  }

  findAll() {
    return this.prisma.reporte.findMany({
      orderBy: {
        idReporte: 'asc',
      },
    });
  }

  findOne(idReporte: number) {
    return this.prisma.reporte.findUnique({
      where: {
        idReporte,
      },
    });
  }

  update(idReporte: number, updateReporteDto: UpdateReporteDto) {
    return this.prisma.reporte.update({
      where: {
        idReporte,
      },
      data: {
        ...updateReporteDto,
      },
    });
  }

  remove(idReporte: number) {
    return this.prisma.reporte.delete({
      where: {
        idReporte,
      },
    });
  }
}