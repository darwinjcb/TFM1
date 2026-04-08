// src/match/match.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) { }

  create(createMatchDto: CreateMatchDto) {
    return this.prisma.match.create({
      data: {
        ...createMatchDto,
      },
    });
  }

  findAll() {
    return this.prisma.match.findMany({
      orderBy: {
        idMatch: 'asc',
      },
    });
  }

  findOne(idMatch: number) {
    return this.prisma.match.findUnique({
      where: {
        idMatch,
      },
    });
  }

  update(idMatch: number, updateMatchDto: UpdateMatchDto) {
    return this.prisma.match.update({
      where: {
        idMatch,
      },
      data: {
        ...updateMatchDto,
      },
    });
  }

  remove(idMatch: number) {
    return this.prisma.match.delete({
      where: {
        idMatch,
      },
    });
  }
}