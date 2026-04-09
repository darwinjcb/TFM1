// src/suscripcion-usuario/suscripcion-usuario.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSuscripcionUsuarioDto } from './dto/create-suscripcion-usuario.dto';
import { UpdateSuscripcionUsuarioDto } from './dto/update-suscripcion-usuario.dto';

@Injectable()
export class SuscripcionUsuarioService {
  constructor(private readonly prisma: PrismaService) { }

  create(createSuscripcionUsuarioDto: CreateSuscripcionUsuarioDto) {
    return this.prisma.suscripcionUsuario.create({
      data: {
        ...createSuscripcionUsuarioDto,
      },
    });
  }

  findAll() {
    return this.prisma.suscripcionUsuario.findMany({
      orderBy: {
        idSuscripcionUsuario: 'asc',
      },
    });
  }

  findOne(idSuscripcionUsuario: number) {
    return this.prisma.suscripcionUsuario.findUnique({
      where: {
        idSuscripcionUsuario,
      },
    });
  }

  update(
    idSuscripcionUsuario: number,
    updateSuscripcionUsuarioDto: UpdateSuscripcionUsuarioDto,
  ) {
    return this.prisma.suscripcionUsuario.update({
      where: {
        idSuscripcionUsuario,
      },
      data: {
        ...updateSuscripcionUsuarioDto,
      },
    });
  }

  remove(idSuscripcionUsuario: number) {
    return this.prisma.suscripcionUsuario.delete({
      where: {
        idSuscripcionUsuario,
      },
    });
  }
}