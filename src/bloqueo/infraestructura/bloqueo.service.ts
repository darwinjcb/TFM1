// src/bloqueo/infraestructura/bloqueo.service.ts:
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarBloqueo, Bloqueo, CrearBloqueo } from '../dominio/bloqueo';
import { BloqueoRepository } from '../dominio/bloqueo.repository';

@Injectable()
export class BloqueoService extends BloqueoRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearBloqueo): Promise<Bloqueo> {
    if (data.idUsuarioBloqueador === data.idUsuarioBloqueado) {
      throw new BadRequestException(
        'Un usuario no puede bloquearse a sí mismo',
      );
    }

    const usuarioBloqueador = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioBloqueador },
    });

    if (!usuarioBloqueador) {
      throw new NotFoundException(
        `No existe un usuario bloqueador con id ${data.idUsuarioBloqueador}`,
      );
    }

    const usuarioBloqueado = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioBloqueado },
    });

    if (!usuarioBloqueado) {
      throw new NotFoundException(
        `No existe un usuario bloqueado con id ${data.idUsuarioBloqueado}`,
      );
    }

    const bloqueoExistente = await this.prisma.bloqueo.findFirst({
      where: {
        idUsuarioBloqueador: data.idUsuarioBloqueador,
        idUsuarioBloqueado: data.idUsuarioBloqueado,
      },
    });

    if (bloqueoExistente) {
      throw new BadRequestException(
        'Ya existe un bloqueo entre estos usuarios',
      );
    }

    return this.prisma.bloqueo.create({
      data: {
        idUsuarioBloqueador: data.idUsuarioBloqueador,
        idUsuarioBloqueado: data.idUsuarioBloqueado,
      },
      include: {
        usuarioBloqueador: true,
        usuarioBloqueado: true,
      },
    });
  }

  async findAll(): Promise<Bloqueo[]> {
    return this.prisma.bloqueo.findMany({
      include: {
        usuarioBloqueador: true,
        usuarioBloqueado: true,
      },
      orderBy: {
        idBloqueo: 'asc',
      },
    });
  }

  async findOne(idBloqueo: number): Promise<Bloqueo> {
    const bloqueo = await this.prisma.bloqueo.findUnique({
      where: { idBloqueo },
      include: {
        usuarioBloqueador: true,
        usuarioBloqueado: true,
      },
    });

    if (!bloqueo) {
      throw new NotFoundException(`No existe un bloqueo con id ${idBloqueo}`);
    }

    return bloqueo;
  }

  async update(
    idBloqueo: number,
    _data: ActualizarBloqueo,
  ): Promise<Bloqueo> {
    const bloqueo = await this.prisma.bloqueo.findUnique({
      where: { idBloqueo },
      include: {
        usuarioBloqueador: true,
        usuarioBloqueado: true,
      },
    });

    if (!bloqueo) {
      throw new NotFoundException(`No existe un bloqueo con id ${idBloqueo}`);
    }

    return bloqueo;
  }

  async remove(idBloqueo: number): Promise<Bloqueo> {
    const bloqueo = await this.prisma.bloqueo.findUnique({
      where: { idBloqueo },
      include: {
        usuarioBloqueador: true,
        usuarioBloqueado: true,
      },
    });

    if (!bloqueo) {
      throw new NotFoundException(`No existe un bloqueo con id ${idBloqueo}`);
    }

    await this.prisma.bloqueo.delete({
      where: { idBloqueo },
    });

    return bloqueo;
  }
}