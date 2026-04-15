// src/chat/dominio/chat.repository.ts:
import { ActualizarChat, Chat, CrearChat } from './chat';

export abstract class ChatRepository {
    abstract create(data: CrearChat): Promise<Chat>;
    abstract findAll(): Promise<Chat[]>;
    abstract findOne(idChat: number): Promise<Chat>;
    abstract update(idChat: number, data: ActualizarChat): Promise<Chat>;
    abstract remove(idChat: number): Promise<Chat>;
}