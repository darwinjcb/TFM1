// src/musica/musica.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMusicaDto } from './dto/create-musica.dto';
import { UpdateMusicaDto } from './dto/update-musica.dto';

@Injectable()
export class MusicaService {
  constructor(private readonly prisma: PrismaService) { }

  create(createMusicaDto: CreateMusicaDto) {
    return this.prisma.musica.create({
      data: {
        ...createMusicaDto,
      },
    });
  }

  findAll() {
    return this.prisma.musica.findMany({
      orderBy: {
        idMusica: 'asc',
      },
    });
  }

  findOne(idMusica: number) {
    return this.prisma.musica.findUnique({
      where: {
        idMusica,
      },
    });
  }

  update(idMusica: number, updateMusicaDto: UpdateMusicaDto) {
    return this.prisma.musica.update({
      where: {
        idMusica,
      },
      data: {
        ...updateMusicaDto,
      },
    });
  }

  remove(idMusica: number) {
    return this.prisma.musica.delete({
      where: {
        idMusica,
      },
    });
  }
}