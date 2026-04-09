// src/musica-usuario/musica-usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMusicaUsuarioDto } from './dto/create-musica-usuario.dto';
import { UpdateMusicaUsuarioDto } from './dto/update-musica-usuario.dto';

@Injectable()
export class MusicaUsuarioService {
  constructor(private readonly prisma: PrismaService) { }

  create(createMusicaUsuarioDto: CreateMusicaUsuarioDto) {
    return this.prisma.musicaUsuario.create({
      data: {
        ...createMusicaUsuarioDto,
      },
    });
  }

  findAll() {
    return this.prisma.musicaUsuario.findMany({
      orderBy: {
        idMusicaUsuario: 'asc',
      },
    });
  }

  findOne(idMusicaUsuario: number) {
    return this.prisma.musicaUsuario.findUnique({
      where: {
        idMusicaUsuario,
      },
    });
  }

  update(idMusicaUsuario: number, updateMusicaUsuarioDto: UpdateMusicaUsuarioDto) {
    return this.prisma.musicaUsuario.update({
      where: {
        idMusicaUsuario,
      },
      data: {
        ...updateMusicaUsuarioDto,
      },
    });
  }

  remove(idMusicaUsuario: number) {
    return this.prisma.musicaUsuario.delete({
      where: {
        idMusicaUsuario,
      },
    });
  }
}