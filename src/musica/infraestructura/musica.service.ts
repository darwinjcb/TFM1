// src/musica/infraestructura/musica.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarMusicaUsuario, CrearMusicaUsuario, MusicaUsuario, } from '../dominio/musica';
import { MusicaRepository } from '../dominio/musica.repository';

@Injectable()
export class MusicaService extends MusicaRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearMusicaUsuario): Promise<MusicaUsuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idUsuario },
    });

    if (!usuario) {
      throw new NotFoundException(
        `No existe un usuario con id ${data.idUsuario}`,
      );
    }

    let musica = await this.prisma.musica.findFirst({
      where: {
        titulo: data.titulo,
        artista: data.artista ?? null,
        album: data.album ?? null,
        enlaceSpotify: data.enlaceSpotify ?? null,
      },
    });

    if (!musica) {
      musica = await this.prisma.musica.create({
        data: {
          titulo: data.titulo,
          artista: data.artista,
          album: data.album,
          enlaceSpotify: data.enlaceSpotify,
        },
      });
    }

    const relacionExistente = await this.prisma.musicaUsuario.findFirst({
      where: {
        idUsuario: data.idUsuario,
        idMusica: musica.idMusica,
      },
    });

    if (relacionExistente) {
      throw new BadRequestException(
        'Esta música ya está asociada a este usuario',
      );
    }

    return this.prisma.musicaUsuario.create({
      data: {
        idUsuario: data.idUsuario,
        idMusica: musica.idMusica,
      },
      include: {
        usuario: true,
        musica: true,
      },
    });
  }

  async findAll(): Promise<MusicaUsuario[]> {
    return this.prisma.musicaUsuario.findMany({
      include: {
        usuario: true,
        musica: true,
      },
      orderBy: {
        idMusicaUsuario: 'asc',
      },
    });
  }

  async findOne(idMusicaUsuario: number): Promise<MusicaUsuario> {
    const musicaUsuario = await this.prisma.musicaUsuario.findUnique({
      where: { idMusicaUsuario },
      include: {
        usuario: true,
        musica: true,
      },
    });

    if (!musicaUsuario) {
      throw new NotFoundException(
        `No existe una música de usuario con id ${idMusicaUsuario}`,
      );
    }

    return musicaUsuario;
  }

  async update(
    idMusicaUsuario: number,
    data: ActualizarMusicaUsuario,
  ): Promise<MusicaUsuario> {
    const musicaUsuario = await this.prisma.musicaUsuario.findUnique({
      where: { idMusicaUsuario },
      include: {
        musica: true,
      },
    });

    if (!musicaUsuario) {
      throw new NotFoundException(
        `No existe una música de usuario con id ${idMusicaUsuario}`,
      );
    }

    await this.prisma.musica.update({
      where: { idMusica: musicaUsuario.idMusica },
      data: {
        titulo: data.titulo,
        artista: data.artista,
        album: data.album,
        enlaceSpotify: data.enlaceSpotify,
      },
    });

    return this.prisma.musicaUsuario.findUniqueOrThrow({
      where: { idMusicaUsuario },
      include: {
        usuario: true,
        musica: true,
      },
    });
  }

  async remove(idMusicaUsuario: number): Promise<MusicaUsuario> {
    const musicaUsuario = await this.prisma.musicaUsuario.findUnique({
      where: { idMusicaUsuario },
      include: {
        usuario: true,
        musica: true,
      },
    });

    if (!musicaUsuario) {
      throw new NotFoundException(
        `No existe una música de usuario con id ${idMusicaUsuario}`,
      );
    }

    await this.prisma.musicaUsuario.delete({
      where: { idMusicaUsuario },
    });

    return musicaUsuario;
  }
}