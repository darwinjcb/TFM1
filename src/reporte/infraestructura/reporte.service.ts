// src/reporte/infraestructura/reporte.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './create-reporte.dto';
import { UpdateReporteDto } from './update-reporte.dto';

@Injectable()
export class ReporteService {
  create(createReporteDto: CreateReporteDto) {
    return 'This action adds a new reporte';
  }

  findAll() {
    return `This action returns all reporte`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporte`;
  }

  update(id: number, updateReporteDto: UpdateReporteDto) {
    return `This action updates a #${id} reporte`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporte`;
  }
}
