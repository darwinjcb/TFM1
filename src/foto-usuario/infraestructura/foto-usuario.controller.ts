// src/foto-usuario/infraestructura/foto-usuario.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FotoUsuarioApplication } from '../aplicacion/foto-usuario.application';
import { CreateFotoUsuarioDto } from './create-foto-usuario.dto';
import { UpdateFotoUsuarioDto } from './update-foto-usuario.dto';

@Controller('foto-usuario')
export class FotoUsuarioController {
  constructor(
    private readonly fotoUsuarioApplication: FotoUsuarioApplication,
  ) { }

  @Post()
  create(@Body() createFotoUsuarioDto: CreateFotoUsuarioDto) {
    return this.fotoUsuarioApplication.create(createFotoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.fotoUsuarioApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotoUsuarioApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFotoUsuarioDto: UpdateFotoUsuarioDto,
  ) {
    return this.fotoUsuarioApplication.update(
      Number(id),
      updateFotoUsuarioDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotoUsuarioApplication.remove(Number(id));
  }
}