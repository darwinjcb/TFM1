// src/musica/infraestructura/musica.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MusicaApplication } from '../aplicacion/musica.application';
import { CreateMusicaDto } from './create-musica.dto';
import { UpdateMusicaDto } from './update-musica.dto';

@Controller('musica')
export class MusicaController {
  constructor(private readonly musicaApplication: MusicaApplication) { }

  @Post()
  create(@Body() createMusicaDto: CreateMusicaDto) {
    return this.musicaApplication.create(createMusicaDto);
  }

  @Get()
  findAll() {
    return this.musicaApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicaApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicaDto: UpdateMusicaDto) {
    return this.musicaApplication.update(Number(id), updateMusicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicaApplication.remove(Number(id));
  }
}