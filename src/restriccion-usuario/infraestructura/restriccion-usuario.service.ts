// src/restriccion-usuario/infraestructura/restriccion-usuario.service.ts:
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarRestriccionUsuario, CrearRestriccionUsuario, RestriccionUsuario, } from '../dominio/restriccion-usuario';
import { RestriccionUsuarioRepository } from '../dominio/restriccion-usuario.repository';

@Injectable()
export class RestriccionUsuarioService
  extends RestriccionUsuarioRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(
    data: CrearRestriccionUsuario,
  ): Promise<RestriccionUsuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    return this.prisma.restriccionUsuario.create({
      data: {
        idUsuario: data.idUsuario,
        descripcion: data.descripcion,
        activa: data.activa ?? true,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findAll(): Promise<RestriccionUsuario[]> {
    return this.prisma.restriccionUsuario.findMany({
      include: {
        usuario: true,
      },
      orderBy: {
        idRestriccion: 'asc',
      },
    });
  }

  async findOne(
    idRestriccion: number,
  ): Promise<RestriccionUsuario> {
    const restriccion = await this.prisma.restriccionUsuario.findUnique({
      where: { idRestriccion },
      include: {
        usuario: true,
      },
    });

    if (!restriccion) {
      throw new NotFoundException(
        `No existe una restricción con id ${idRestriccion}`,
      );
    }

    return restriccion;
  }

  async update(
    idRestriccion: number,
    data: ActualizarRestriccionUsuario,
  ): Promise<RestriccionUsuario> {
    const restriccionExistente =
      await this.prisma.restriccionUsuario.findUnique({
        where: { idRestriccion },
      });

    if (!restriccionExistente) {
      throw new NotFoundException(
        `No existe una restricción con id ${idRestriccion}`,
      );
    }

    return this.prisma.restriccionUsuario.update({
      where: { idRestriccion },
      data: {
        descripcion: data.descripcion,
        activa: data.activa,
      },
      include: {
        usuario: true,
      },
    });
  }

  async remove(
    idRestriccion: number,
  ): Promise<RestriccionUsuario> {
    const restriccionExistente =
      await this.prisma.restriccionUsuario.findUnique({
        where: { idRestriccion },
        include: {
          usuario: true,
        },
      });

    if (!restriccionExistente) {
      throw new NotFoundException(
        `No existe una restricción con id ${idRestriccion}`,
      );
    }

    await this.prisma.restriccionUsuario.delete({
      where: { idRestriccion },
    });

    return restriccionExistente;
  }
}