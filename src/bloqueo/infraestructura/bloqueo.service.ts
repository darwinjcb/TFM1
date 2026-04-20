// src/bloqueo/infraestructura/bloqueo.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateBloqueoDto } from './create-bloqueo.dto';
import { UpdateBloqueoDto } from './update-bloqueo.dto';

@Injectable()
export class BloqueoService {
  create(createBloqueoDto: CreateBloqueoDto) {
    return 'This action adds a new bloqueo';
  }

  findAll() {
    return `This action returns all bloqueo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bloqueo`;
  }

  update(id: number, updateBloqueoDto: UpdateBloqueoDto) {
    return `This action updates a #${id} bloqueo`;
  }

  remove(id: number) {
    return `This action removes a #${id} bloqueo`;
  }
}
