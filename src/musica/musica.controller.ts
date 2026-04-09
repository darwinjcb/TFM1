// src/musica/musica.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicaService } from './musica.service';
import { CreateMusicaDto } from './dto/create-musica.dto';
import { UpdateMusicaDto } from './dto/update-musica.dto';

@Controller('musica')
export class MusicaController {
  constructor(private readonly musicaService: MusicaService) { }

  @Post()
  create(@Body() createMusicaDto: CreateMusicaDto) {
    return this.musicaService.create(createMusicaDto);
  }

  @Get()
  findAll() {
    return this.musicaService.findAll();
  }

  @Get(':idMusica')
  findOne(@Param('idMusica') idMusica: string) {
    return this.musicaService.findOne(+idMusica);
  }

  @Patch(':idMusica')
  update(
    @Param('idMusica') idMusica: string,
    @Body() updateMusicaDto: UpdateMusicaDto,
  ) {
    return this.musicaService.update(+idMusica, updateMusicaDto);
  }

  @Delete(':idMusica')
  remove(@Param('idMusica') idMusica: string) {
    return this.musicaService.remove(+idMusica);
  }
}