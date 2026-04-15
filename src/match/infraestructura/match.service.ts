// src/match/infraestructura/match.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMatchDto } from './create-match.dto';
import { UpdateMatchDto } from './update-match.dto';

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createMatchDto: CreateMatchDto) {
    if (createMatchDto.idUsuarioUno === createMatchDto.idUsuarioDos) {
      throw new BadRequestException(
        'Un usuario no puede hacer match consigo mismo',
      );
    }

    const usuarioUno = await this.prisma.usuario.findUnique({
      where: { idUsuario: createMatchDto.idUsuarioUno },
    });

    if (!usuarioUno) {
      throw new NotFoundException(
        `No existe un usuario con id ${createMatchDto.idUsuarioUno}`,
      );
    }

    const usuarioDos = await this.prisma.usuario.findUnique({
      where: { idUsuario: createMatchDto.idUsuarioDos },
    });

    if (!usuarioDos) {
      throw new NotFoundException(
        `No existe un usuario con id ${createMatchDto.idUsuarioDos}`,
      );
    }

    const likeUsuarioUno = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: createMatchDto.idUsuarioUno,
        idUsuarioReceptor: createMatchDto.idUsuarioDos,
        tipoInteraccion: 'LIKE',
      },
    });

    const likeUsuarioDos = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: createMatchDto.idUsuarioDos,
        idUsuarioReceptor: createMatchDto.idUsuarioUno,
        tipoInteraccion: 'LIKE',
      },
    });

    if (!likeUsuarioUno || !likeUsuarioDos) {
      throw new BadRequestException(
        'No se puede crear el match porque no existe LIKE mutuo',
      );
    }

    const idUsuarioMenor = Math.min(
      createMatchDto.idUsuarioUno,
      createMatchDto.idUsuarioDos,
    );
    const idUsuarioMayor = Math.max(
      createMatchDto.idUsuarioUno,
      createMatchDto.idUsuarioDos,
    );

    const matchExistente = await this.prisma.match.findFirst({
      where: {
        idUsuarioUno: idUsuarioMenor,
        idUsuarioDos: idUsuarioMayor,
      },
    });

    if (matchExistente) {
      throw new BadRequestException(
        'Ya existe un match entre estos usuarios',
      );
    }

    return this.prisma.match.create({
      data: {
        idUsuarioUno: idUsuarioMenor,
        idUsuarioDos: idUsuarioMayor,
      },
      include: {
        usuarioUno: true,
        usuarioDos: true,
      },
    });
  }

  async findAll() {
    return this.prisma.match.findMany({
      include: {
        usuarioUno: true,
        usuarioDos: true,
      },
      orderBy: {
        idMatch: 'asc',
      },
    });
  }

  async findOne(idMatch: number) {
    const match = await this.prisma.match.findUnique({
      where: { idMatch },
      include: {
        usuarioUno: true,
        usuarioDos: true,
      },
    });

    if (!match) {
      throw new NotFoundException(`No existe un match con id ${idMatch}`);
    }

    return match;
  }

  async update(idMatch: number, updateMatchDto: UpdateMatchDto) {
    const matchExistente = await this.prisma.match.findUnique({
      where: { idMatch },
    });

    if (!matchExistente) {
      throw new NotFoundException(`No existe un match con id ${idMatch}`);
    }

    return this.prisma.match.update({
      where: { idMatch },
      data: {
        activo: updateMatchDto.activo,
      },
      include: {
        usuarioUno: true,
        usuarioDos: true,
      },
    });
  }

  async remove(idMatch: number) {
    const matchExistente = await this.prisma.match.findUnique({
      where: { idMatch },
    });

    if (!matchExistente) {
      throw new NotFoundException(`No existe un match con id ${idMatch}`);
    }

    return this.prisma.match.delete({
      where: { idMatch },
    });
  }
}