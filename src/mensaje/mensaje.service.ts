// src/mensaje/mensaje.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';

@Injectable()
export class MensajeService {
  constructor(private readonly prisma: PrismaService) { }

  create(createMensajeDto: CreateMensajeDto) {
    return this.prisma.mensaje.create({
      data: {
        ...createMensajeDto,
      },
    });
  }

  findAll() {
    return this.prisma.mensaje.findMany({
      orderBy: {
        idMensaje: 'asc',
      },
    });
  }

  findOne(idMensaje: number) {
    return this.prisma.mensaje.findUnique({
      where: {
        idMensaje,
      },
    });
  }

  update(idMensaje: number, updateMensajeDto: UpdateMensajeDto) {
    return this.prisma.mensaje.update({
      where: {
        idMensaje,
      },
      data: {
        ...updateMensajeDto,
      },
    });
  }

  remove(idMensaje: number) {
    return this.prisma.mensaje.delete({
      where: {
        idMensaje,
      },
    });
  }
}