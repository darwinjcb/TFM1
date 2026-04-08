// src/chat/chat.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) { }

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get(':idChat')
  findOne(@Param('idChat') idChat: string) {
    return this.chatService.findOne(+idChat);
  }

  @Patch(':idChat')
  update(
    @Param('idChat') idChat: string,
    @Body() updateChatDto: UpdateChatDto,
  ) {
    return this.chatService.update(+idChat, updateChatDto);
  }

  @Delete(':idChat')
  remove(@Param('idChat') idChat: string) {
    return this.chatService.remove(+idChat);
  }
}