// src/mensaje/infraestructura/mensaje.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarMensaje, CrearMensaje, Mensaje, } from '../dominio/mensaje';
import { MensajeRepository } from '../dominio/mensaje.repository';

@Injectable()
export class MensajeService extends MensajeRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearMensaje): Promise<Mensaje> {
    const chat = await this.prisma.chat.findUnique({
      where: { idChat: data.idChat },
    });

    if (!chat) {
      throw new NotFoundException(`No existe un chat con id ${data.idChat}`);
    }

    const remitente = await this.prisma.usuario.findUnique({
      where: { idUsuario: data.idRemitente },
    });

    if (!remitente) {
      throw new NotFoundException(
        `No existe un usuario remitente con id ${data.idRemitente}`,
      );
    }

    const remitentePerteneceAlChat =
      chat.idUsuarioUno === data.idRemitente ||
      chat.idUsuarioDos === data.idRemitente;

    if (!remitentePerteneceAlChat) {
      throw new BadRequestException(
        'El remitente no pertenece a este chat',
      );
    }

    return this.prisma.mensaje.create({
      data: {
        idChat: data.idChat,
        idRemitente: data.idRemitente,
        contenido: data.contenido,
      },
      include: {
        chat: true,
        remitente: true,
      },
    });
  }

  async findAll(): Promise<Mensaje[]> {
    return this.prisma.mensaje.findMany({
      include: {
        chat: true,
        remitente: true,
      },
      orderBy: {
        idMensaje: 'asc',
      },
    });
  }

  async findOne(idMensaje: number): Promise<Mensaje> {
    const mensaje = await this.prisma.mensaje.findUnique({
      where: { idMensaje },
      include: {
        chat: true,
        remitente: true,
      },
    });

    if (!mensaje) {
      throw new NotFoundException(
        `No existe un mensaje con id ${idMensaje}`,
      );
    }

    return mensaje;
  }

  async update(
    idMensaje: number,
    data: ActualizarMensaje,
  ): Promise<Mensaje> {
    const mensajeExistente = await this.prisma.mensaje.findUnique({
      where: { idMensaje },
    });

    if (!mensajeExistente) {
      throw new NotFoundException(
        `No existe un mensaje con id ${idMensaje}`,
      );
    }

    return this.prisma.mensaje.update({
      where: { idMensaje },
      data: {
        contenido: data.contenido,
        leido: data.leido,
      },
      include: {
        chat: true,
        remitente: true,
      },
    });
  }

  async remove(idMensaje: number): Promise<Mensaje> {
    const mensajeExistente = await this.prisma.mensaje.findUnique({
      where: { idMensaje },
    });

    if (!mensajeExistente) {
      throw new NotFoundException(
        `No existe un mensaje con id ${idMensaje}`,
      );
    }

    return this.prisma.mensaje.delete({
      where: { idMensaje },
    });
  }
}