// src/interaccion/interaccion.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInteraccionDto } from './dto/create-interaccion.dto';
import { UpdateInteraccionDto } from './dto/update-interaccion.dto';

@Injectable()
export class InteraccionService {
  constructor(private readonly prisma: PrismaService) { }

  create(createInteraccionDto: CreateInteraccionDto) {
    return this.prisma.interaccion.create({
      data: {
        ...createInteraccionDto,
      },
    });
  }

  findAll() {
    return this.prisma.interaccion.findMany({
      orderBy: {
        idInteraccion: 'asc',
      },
    });
  }

  findOne(idInteraccion: number) {
    return this.prisma.interaccion.findUnique({
      where: {
        idInteraccion,
      },
    });
  }

  update(idInteraccion: number, updateInteraccionDto: UpdateInteraccionDto) {
    return this.prisma.interaccion.update({
      where: {
        idInteraccion,
      },
      data: {
        ...updateInteraccionDto,
      },
    });
  }

  remove(idInteraccion: number) {
    return this.prisma.interaccion.delete({
      where: {
        idInteraccion,
      },
    });
  }
}