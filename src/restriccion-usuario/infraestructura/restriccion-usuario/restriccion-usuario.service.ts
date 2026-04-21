// src/restriccion-usuario/infraestructura/restriccion-usuario/restriccion-usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateRestriccionUsuarioDto } from './dto/create-restriccion-usuario.dto';
import { UpdateRestriccionUsuarioDto } from './dto/update-restriccion-usuario.dto';

@Injectable()
export class RestriccionUsuarioService {
  create(createRestriccionUsuarioDto: CreateRestriccionUsuarioDto) {
    return 'This action adds a new restriccionUsuario';
  }

  findAll() {
    return `This action returns all restriccionUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restriccionUsuario`;
  }

  update(id: number, updateRestriccionUsuarioDto: UpdateRestriccionUsuarioDto) {
    return `This action updates a #${id} restriccionUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} restriccionUsuario`;
  }
}
