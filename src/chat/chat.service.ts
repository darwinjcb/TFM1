// src/chat/chat.service.ts:
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) { }

  create(createChatDto: CreateChatDto) {
    return this.prisma.chat.create({
      data: {
        ...createChatDto,
      },
    });
  }

  findAll() {
    return this.prisma.chat.findMany({
      orderBy: {
        idChat: 'asc',
      },
    });
  }

  findOne(idChat: number) {
    return this.prisma.chat.findUnique({
      where: {
        idChat,
      },
    });
  }

  update(idChat: number, updateChatDto: UpdateChatDto) {
    return this.prisma.chat.update({
      where: {
        idChat,
      },
      data: {
        ...updateChatDto,
      },
    });
  }

  remove(idChat: number) {
    return this.prisma.chat.delete({
      where: {
        idChat,
      },
    });
  }
}