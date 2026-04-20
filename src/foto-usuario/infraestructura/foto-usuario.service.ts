// src/foto-usuario/infraestructura/foto-usuario.service.ts:
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarFotoUsuario, CrearFotoUsuario, FotoUsuario, } from '../dominio/foto-usuario';
import { FotoUsuarioRepository } from '../dominio/foto-usuario.repository';

@Injectable()
export class FotoUsuarioService extends FotoUsuarioRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearFotoUsuario): Promise<FotoUsuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    return this.prisma.fotoUsuario.create({
      data: {
        idUsuario: data.idUsuario,
        urlFoto: data.urlFoto,
        descripcion: data.descripcion,
      },
      include: {
        usuario: true,
      },
    });
  }

  async findAll(): Promise<FotoUsuario[]> {
    return this.prisma.fotoUsuario.findMany({
      include: {
        usuario: true,
      },
      orderBy: {
        idFoto: 'asc',
      },
    });
  }

  async findOne(idFoto: number): Promise<FotoUsuario> {
    const foto = await this.prisma.fotoUsuario.findUnique({
      where: { idFoto },
      include: {
        usuario: true,
      },
    });

    if (!foto) {
      throw new NotFoundException(`No existe una foto con id ${idFoto}`);
    }

    return foto;
  }

  async update(
    idFoto: number,
    data: ActualizarFotoUsuario,
  ): Promise<FotoUsuario> {
    const fotoExistente = await this.prisma.fotoUsuario.findUnique({
      where: { idFoto },
    });

    if (!fotoExistente) {
      throw new NotFoundException(`No existe una foto con id ${idFoto}`);
    }

    return this.prisma.fotoUsuario.update({
      where: { idFoto },
      data: {
        urlFoto: data.urlFoto,
        descripcion: data.descripcion,
      },
      include: {
        usuario: true,
      },
    });
  }

  async remove(idFoto: number): Promise<FotoUsuario> {
    const fotoExistente = await this.prisma.fotoUsuario.findUnique({
      where: { idFoto },
      include: {
        usuario: true,
      },
    });

    if (!fotoExistente) {
      throw new NotFoundException(`No existe una foto con id ${idFoto}`);
    }

    await this.prisma.fotoUsuario.delete({
      where: { idFoto },
    });

    return fotoExistente;
  }
}