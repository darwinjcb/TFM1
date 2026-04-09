// src/bloqueo/bloqueo.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';
import { UpdateBloqueoDto } from './dto/update-bloqueo.dto';

@Injectable()
export class BloqueoService {
  constructor(private readonly prisma: PrismaService) { }

  create(createBloqueoDto: CreateBloqueoDto) {
    return this.prisma.bloqueo.create({
      data: {
        ...createBloqueoDto,
      },
    });
  }

  findAll() {
    return this.prisma.bloqueo.findMany({
      orderBy: {
        idBloqueo: 'asc',
      },
    });
  }

  findOne(idBloqueo: number) {
    return this.prisma.bloqueo.findUnique({
      where: {
        idBloqueo,
      },
    });
  }

  update(idBloqueo: number, updateBloqueoDto: UpdateBloqueoDto) {
    return this.prisma.bloqueo.update({
      where: {
        idBloqueo,
      },
      data: {
        ...updateBloqueoDto,
      },
    });
  }

  remove(idBloqueo: number) {
    return this.prisma.bloqueo.delete({
      where: {
        idBloqueo,
      },
    });
  }
}