// src/musica-usuario/musica-usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateMusicaUsuarioDto } from './dto/create-musica-usuario.dto';
import { UpdateMusicaUsuarioDto } from './dto/update-musica-usuario.dto';

@Injectable()
export class MusicaUsuarioService {
  create(createMusicaUsuarioDto: CreateMusicaUsuarioDto) {
    return 'This action adds a new musicaUsuario';
  }

  findAll() {
    return `This action returns all musicaUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musicaUsuario`;
  }

  update(id: number, updateMusicaUsuarioDto: UpdateMusicaUsuarioDto) {
    return `This action updates a #${id} musicaUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} musicaUsuario`;
  }
}
