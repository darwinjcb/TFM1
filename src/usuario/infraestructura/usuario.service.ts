// src/usuario/infraestructura/usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: CreateUsuarioDto) {
    return {
      mensaje: 'Pendiente de implementar creación de usuario en base de datos',
      datos: createUsuarioDto,
    };
  }

  findAll() {
    return {
      mensaje: 'Pendiente de implementar listado de usuarios en base de datos',
    };
  }

  findOne(idUsuario: number) {
    return {
      mensaje: 'Pendiente de implementar búsqueda de usuario por id',
      idUsuario,
    };
  }

  update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return {
      mensaje: 'Pendiente de implementar actualización de usuario en base de datos',
      idUsuario,
      datos: updateUsuarioDto,
    };
  }

  remove(idUsuario: number) {
    return {
      mensaje: 'Pendiente de implementar eliminación de usuario en base de datos',
      idUsuario,
    };
  }
}