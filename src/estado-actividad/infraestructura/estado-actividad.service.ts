// src/estado-actividad/infraestructura/estado-actividad.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateEstadoActividadDto } from './create-estado-actividad.dto';
import { UpdateEstadoActividadDto } from './update-estado-actividad.dto';

@Injectable()
export class EstadoActividadService {
  create(createEstadoActividadDto: CreateEstadoActividadDto) {
    return 'This action adds a new estadoActividad';
  }

  findAll() {
    return `This action returns all estadoActividad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoActividad`;
  }

  update(id: number, updateEstadoActividadDto: UpdateEstadoActividadDto) {
    return `This action updates a #${id} estadoActividad`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoActividad`;
  }
}
