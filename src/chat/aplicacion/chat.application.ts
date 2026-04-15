// src/chat/aplicacion/chat.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarChat, CrearChat } from '../dominio/chat';
import { ChatRepository } from '../dominio/chat.repository';

@Injectable()
export class ChatApplication {
    constructor(private readonly chatRepository: ChatRepository) { }

    create(data: CrearChat) {
        return this.chatRepository.create(data);
    }

    findAll() {
        return this.chatRepository.findAll();
    }

    findOne(idChat: number) {
        return this.chatRepository.findOne(idChat);
    }

    update(idChat: number, data: ActualizarChat) {
        return this.chatRepository.update(idChat, data);
    }

    remove(idChat: number) {
        return this.chatRepository.remove(idChat);
    }
}