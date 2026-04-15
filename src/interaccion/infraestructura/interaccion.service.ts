// src/interaccion/infraestructura/interaccion.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateInteraccionDto } from './create-interaccion.dto';
import { UpdateInteraccionDto } from './update-interaccion.dto';

@Injectable()
export class InteraccionService {
  create(createInteraccionDto: CreateInteraccionDto) {
    return 'This action adds a new interaccion';
  }

  findAll() {
    return `This action returns all interaccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interaccion`;
  }

  update(id: number, updateInteraccionDto: UpdateInteraccionDto) {
    return `This action updates a #${id} interaccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} interaccion`;
  }
}
