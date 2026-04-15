// src/chat/infraestructura/chat/chat.module.ts:
import { Module } from '@nestjs/common';
import { ChatApplication } from '../aplicacion/chat.application';
import { ChatRepository } from '../dominio/chat.repository';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  controllers: [ChatController],
  providers: [
    ChatApplication,
    ChatService,
    {
      provide: ChatRepository,
      useExisting: ChatService,
    },
  ],
})
export class ChatModule { }