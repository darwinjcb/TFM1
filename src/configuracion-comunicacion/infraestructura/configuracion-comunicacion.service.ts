// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateConfiguracionComunicacionDto } from './create-configuracion-comunicacion.dto';
import { UpdateConfiguracionComunicacionDto } from './update-configuracion-comunicacion.dto';

@Injectable()
export class ConfiguracionComunicacionService {
  create(createConfiguracionComunicacionDto: CreateConfiguracionComunicacionDto) {
    return 'This action adds a new configuracionComunicacion';
  }

  findAll() {
    return `This action returns all configuracionComunicacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configuracionComunicacion`;
  }

  update(id: number, updateConfiguracionComunicacionDto: UpdateConfiguracionComunicacionDto) {
    return `This action updates a #${id} configuracionComunicacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} configuracionComunicacion`;
  }
}
