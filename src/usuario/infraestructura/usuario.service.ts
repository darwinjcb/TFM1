// src/usuario/infraestructura/usuario.service.ts:
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUsuarioDto } from './create-usuario.dto';
import { UpdateUsuarioDto } from './update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: {
        nombre: createUsuarioDto.nombre,
        edad: createUsuarioDto.edad,
        biografia: createUsuarioDto.biografia,
        peso: createUsuarioDto.peso,
        altura: createUsuarioDto.altura,
        nacionalidad: createUsuarioDto.nacionalidad,
        genero: createUsuarioDto.genero as any,
        ciudad: createUsuarioDto.ciudad,
        pais: createUsuarioDto.pais,
        numero: createUsuarioDto.numero,
        correo: createUsuarioDto.correo,
        signoZodiacal: createUsuarioDto.signoZodiacal,
        queBusca: createUsuarioDto.queBusca,
        ubicacion: createUsuarioDto.ubicacion,
        hobbie: createUsuarioDto.hobbie,
        profesion: createUsuarioDto.profesion,
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      include: {
        fotos: true,
        suscripcion: {
          include: {
            planSuscripcion: true,
          },
        },
        configuracionComunicacion: true,
        estadoActividad: true,
      },
      orderBy: {
        idUsuario: 'asc',
      },
    });
  }

  async findOne(idUsuario: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario },
      include: {
        fotos: true,
        suscripcion: {
          include: {
            planSuscripcion: true,
          },
        },
        configuracionComunicacion: true,
        estadoActividad: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return usuario;
  }

  async update(idUsuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { idUsuario },
    });

    if (!usuarioExistente) {
      throw new NotFoundException(`No existe un usuario con id ${idUsuario}`);
    }

    return this.prisma.usuario.update({
      where: { idUsuario },
      data: {
        nombre: updateUsuarioDto.nombre,
        edad: updateUsuarioDto.edad,
        biografia: updateUsuarioDto.biografia,
        peso: updateUsuarioDto.peso,
        altura: updateUsuarioDto.altura,
        nacionalidad: updateUsuarioDto.nacionalidad,
        genero: updateUsuarioDto.genero as any,
        ciudad: updateUsuarioDto.ciudad,
        pais: updateUsuarioDto.pais,
        numero: updateUsuarioDto.numero,
        correo: updateUsuarioDto.correo,
        signoZodiacal: updateUsuarioDto.signoZodiacal,
        queBusca: updateUsuarioDto.queBusca,
        ubicacion: updateUsuarioDto.ubicacion,
        hobbie: updateUsuarioDto.hobbie,
        profesion: updateUsuarioDto.profesion,
      },
    });
  }

  async remove(idUsuario: number) {
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