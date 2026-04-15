// src/chat/infraestructura/chat.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChatApplication } from '../aplicacion/chat.application';
import { CreateChatDto } from './create-chat.dto';
import { UpdateChatDto } from './update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatApplication: ChatApplication) { }

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatApplication.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatApplication.update(Number(id), updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatApplication.remove(Number(id));
  }
}