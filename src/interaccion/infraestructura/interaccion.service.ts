// src/interaccion/infraestructura/interaccion.service.ts:
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ActualizarInteraccion,
  CrearInteraccion,
  Interaccion,
} from '../dominio/interaccion';
import { InteraccionRepository } from '../dominio/interaccion.repository';

@Injectable()
export class InteraccionService extends InteraccionRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearInteraccion): Promise<Interaccion> {
    if (data.idUsuarioEmisor === data.idUsuarioReceptor) {
      throw new BadRequestException(
        'Un usuario no puede interactuar consigo mismo',
      );
    }

    const usuarioEmisor = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioEmisor },
    });

    if (!usuarioEmisor) {
      throw new NotFoundException(
        `No existe un usuario emisor con id ${data.idUsuarioEmisor}`,
      );
    }

    const usuarioReceptor = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuarioReceptor },
    });

    if (!usuarioReceptor) {
      throw new NotFoundException(
        `No existe un usuario receptor con id ${data.idUsuarioReceptor}`,
      );
    }

    const interaccionExistente = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: data.idUsuarioEmisor,
        idUsuarioReceptor: data.idUsuarioReceptor,
      },
    });

    if (interaccionExistente) {
      throw new BadRequestException(
        'Ya existe una interacción entre estos usuarios',
      );
    }

    return this.prisma.interaccion.create({
      data: {
        idUsuarioEmisor: data.idUsuarioEmisor,
        idUsuarioReceptor: data.idUsuarioReceptor,
        tipoInteraccion: data.tipoInteraccion,
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async findAll(): Promise<Interaccion[]> {
    return this.prisma.interaccion.findMany({
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
      orderBy: {
        idInteraccion: 'asc',
      },
    });
  }

  async findOne(idInteraccion: number): Promise<Interaccion> {
    const interaccion = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });

    if (!interaccion) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return interaccion;
  }

  async update(
    idInteraccion: number,
    data: ActualizarInteraccion,
  ): Promise<Interaccion> {
    const interaccionExistente = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
    });

    if (!interaccionExistente) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return this.prisma.interaccion.update({
      where: { idInteraccion },
      data: {
        tipoInteraccion: data.tipoInteraccion,
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async remove(idInteraccion: number): Promise<Interaccion> {
    const interaccionExistente = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
    });

    if (!interaccionExistente) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return this.prisma.interaccion.delete({
      where: { idInteraccion },
    });
  }
}