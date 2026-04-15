// src/chat/infraestructura/chat.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ActualizarChat, Chat, CrearChat } from '../dominio/chat';
import { ChatRepository } from '../dominio/chat.repository';

@Injectable()
export class ChatService extends ChatRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(data: CrearChat): Promise<Chat> {
    if (data.idUsuarioUno === data.idUsuarioDos) {
      throw new BadRequestException(
        'Un usuario no puede crear un chat consigo mismo',
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

    const matchExistente = await this.prisma.match.findFirst({
      where: {
        idUsuarioUno: idUsuarioMenor,
        idUsuarioDos: idUsuarioMayor,
        activo: true,
      },
    });

    if (!matchExistente) {
      throw new BadRequestException(
        'No se puede crear el chat porque no existe un match activo entre los usuarios',
      );
    }

    const chatExistente = await this.prisma.chat.findFirst({
      where: {
        idUsuarioUno: idUsuarioMenor,
        idUsuarioDos: idUsuarioMayor,
      },
    });

    if (chatExistente) {
      throw new BadRequestException(
        'Ya existe un chat entre estos usuarios',
      );
    }

    return this.prisma.chat.create({
      data: {
        idUsuarioUno: idUsuarioMenor,
        idUsuarioDos: idUsuarioMayor,
      },
      include: {
        usuarioUno: true,
        usuarioDos: true,
        mensajes: true,
      },
    });
  }

  async findAll(): Promise<Chat[]> {
    return this.prisma.chat.findMany({
      include: {
        usuarioUno: true,
        usuarioDos: true,
        mensajes: true,
      },
      orderBy: {
        idChat: 'asc',
      },
    });
  }

  async findOne(idChat: number): Promise<Chat> {
    const chat = await this.prisma.chat.findUnique({
      where: { idChat },
      include: {
        usuarioUno: true,
        usuarioDos: true,
        mensajes: true,
      },
    });

    if (!chat) {
      throw new NotFoundException(`No existe un chat con id ${idChat}`);
    }

    return chat;
  }

  async update(idChat: number, _data: ActualizarChat): Promise<Chat> {
    const chat = await this.prisma.chat.findUnique({
      where: { idChat },
      include: {
        usuarioUno: true,
        usuarioDos: true,
        mensajes: true,
      },
    });

    if (!chat) {
      throw new NotFoundException(`No existe un chat con id ${idChat}`);
    }

    return chat;
  }

  async remove(idChat: number): Promise<Chat> {
    const chatExistente = await this.prisma.chat.findUnique({
      where: { idChat },
    });

    if (!chatExistente) {
      throw new NotFoundException(`No existe un chat con id ${idChat}`);
    }

    return this.prisma.chat.delete({
      where: { idChat },
    });
  }
}