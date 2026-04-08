// src/usuario/usuario.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':idUsuario')
  findOne(@Param('idUsuario') idUsuario: string) {
    return this.usuarioService.findOne(+idUsuario);
  }

  @Patch(':idUsuario')
  update(
    @Param('idUsuario') idUsuario: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(+idUsuario, updateUsuarioDto);
  }

  @Delete(':idUsuario')
  remove(@Param('idUsuario') idUsuario: string) {
    return this.usuarioService.remove(+idUsuario);
  }
}