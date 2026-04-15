// src/match/infraestructura/match.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarMatch, CrearMatch, Match } from '../dominio/match';
import { MatchRepository } from '../dominio/match.repository';

@Injectable()
export class MatchService extends MatchRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearMatch): Promise<Match> {
    if (data.idUsuarioUno === data.idUsuarioDos) {
      throw new BadRequestException(
        'Un usuario no puede hacer match consigo mismo',
      );
    }

    const usuarioUno = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioUno },
    });

    if (!usuarioUno) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuarioUno}`,
      );
    }

    const usuarioDos = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioDos },
    });

    if (!usuarioDos) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuarioDos}`,
      );
    }

    const idUsuarioMenor = Math.min(data.idUsuarioUno, data.idUsuarioDos);
    const idUsuarioMayor = Math.max(data.idUsuarioUno, data.idUsuarioDos);

    const likeUsuarioUno = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: idUsuarioMenor,
        idUsuarioReceptor: idUsuarioMayor,
        tipoInteraccion: 'LIKE',
      },
    });

    const likeUsuarioDos = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: idUsuarioMayor,
        idUsuarioReceptor: idUsuarioMenor,
        tipoInteraccion: 'LIKE',
      },
    });

    if (!likeUsuarioUno || !likeUsuarioDos) {
      throw new BadRequestException(
        'No se puede crear el match porque no existe LIKE mutuo',
      );
    }

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

  async findAll(): Promise<Match[]> {
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

  async findOne(idMatch: number): Promise<Match> {
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

  async update(idMatch: number, data: ActualizarMatch): Promise<Match> {
    const matchExistente = await this.prisma.match.findUnique({
      where: { idMatch },
    });

    if (!matchExistente) {
      throw new NotFoundException(`No existe un match con id ${idMatch}`);
    }

    return this.prisma.match.update({
      where: { idMatch },
      data: {
        activo: data.activo,
      },
      include: {
        usuarioUno: true,
        usuarioDos: true,
      },
    });
  }

  async remove(idMatch: number): Promise<Match> {
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