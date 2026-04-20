// src/foto-usuario/infraestructura/foto-usuario/foto-usuario.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FotoUsuarioService } from './foto-usuario.service';
import { CreateFotoUsuarioDto } from './dto/create-foto-usuario.dto';
import { UpdateFotoUsuarioDto } from './dto/update-foto-usuario.dto';

@Controller('foto-usuario')
export class FotoUsuarioController {
  constructor(private readonly fotoUsuarioService: FotoUsuarioService) { }

  @Post()
  create(@Body() createFotoUsuarioDto: CreateFotoUsuarioDto) {
    return this.fotoUsuarioService.create(createFotoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.fotoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFotoUsuarioDto: UpdateFotoUsuarioDto) {
    return this.fotoUsuarioService.update(+id, updateFotoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotoUsuarioService.remove(+id);
  }
}
