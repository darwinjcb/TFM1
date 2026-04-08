// src/usuario/usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
      },
    });
  }

  findAll() {
    return this.prisma.usuario.findMany({
      orderBy: {
        idUsuario: 'asc',
      },
    });
  }

  findOne(idUsuario: number) {
    return this.prisma.usuario.findUnique({
      where: {
        idUsuario,
      },
    });
  }

  update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: {
        idUsuario,
      },
      data: {
        ...updateUsuarioDto,
      },
    });
  }

  remove(idUsuario: number) {
    return this.prisma.usuario.delete({
      where: {
        idUsuario,
      },
    });
  }
}