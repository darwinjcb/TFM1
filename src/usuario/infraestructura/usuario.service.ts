// src/usuario/infraestructura/usuario.service.ts:
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  ActualizarUsuario,
  CrearUsuario,
  Usuario,
} from '../dominio/usuario';
import { UsuarioRepository } from '../dominio/usuario.repository';

@Injectable()
export class UsuarioService extends UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearUsuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        edad: data.edad,
        biografia: data.biografia,
        peso: data.peso,
        altura: data.altura,
        nacionalidad: data.nacionalidad,
        genero: data.genero,
        ciudad: data.ciudad,
        pais: data.pais,
        numero: data.numero,
        correo: data.correo,
        signoZodiacal: data.signoZodiacal,
        queBusca: data.queBusca,
        ubicacion: data.ubicacion,
        hobbie: data.hobbie,
        profesion: data.profesion,
      },
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      orderBy: {
        idUsuario: 'asc',
      },
    });
  }

  async findOne(idUsuario: number): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return usuario;
  }

  async update(
    idUsuario: number,
    data: ActualizarUsuario,
  ): Promise<Usuario> {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { idUsuario },
    });

    if (!usuarioExistente) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return this.prisma.usuario.update({
      where: { idUsuario },
      data: {
        nombre: data.nombre,
        edad: data.edad,
        biografia: data.biografia,
        peso: data.peso,
        altura: data.altura,
        nacionalidad: data.nacionalidad,
        genero: data.genero,
        ciudad: data.ciudad,
        pais: data.pais,
        numero: data.numero,
        correo: data.correo,
        signoZodiacal: data.signoZodiacal,
        queBusca: data.queBusca,
        ubicacion: data.ubicacion,
        hobbie: data.hobbie,
        profesion: data.profesion,
      },
    });
  }

  async remove(idUsuario: number): Promise<Usuario> {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { idUsuario },
    });

    if (!usuarioExistente) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return this.prisma.usuario.delete({
      where: { idUsuario },
    });
  }
}