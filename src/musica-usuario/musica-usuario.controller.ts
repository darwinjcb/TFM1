// src/musica-usuario/musica-usuario.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicaUsuarioService } from './musica-usuario.service';
import { CreateMusicaUsuarioDto } from './dto/create-musica-usuario.dto';
import { UpdateMusicaUsuarioDto } from './dto/update-musica-usuario.dto';

@Controller('musica-usuario')
export class MusicaUsuarioController {
  constructor(private readonly musicaUsuarioService: MusicaUsuarioService) { }

  @Post()
  create(@Body() createMusicaUsuarioDto: CreateMusicaUsuarioDto) {
    return this.musicaUsuarioService.create(createMusicaUsuarioDto);
  }

  @Get()
  findAll() {
    return this.musicaUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicaUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicaUsuarioDto: UpdateMusicaUsuarioDto) {
    return this.musicaUsuarioService.update(+id, updateMusicaUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicaUsuarioService.remove(+id);
  }
}
