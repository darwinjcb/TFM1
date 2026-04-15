// src/usuario/infraestructura/usuario.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsuarioApplication } from '../aplicacion/usuario.application';
import { CreateUsuarioDto } from './create-usuario.dto';
import { UpdateUsuarioDto } from './update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioApplication: UsuarioApplication) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioApplication.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioApplication.update(Number(id), updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioApplication.remove(Number(id));
  }
}