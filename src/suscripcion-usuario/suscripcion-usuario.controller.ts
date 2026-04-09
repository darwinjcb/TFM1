// src/suscripcion-usuario/suscripcion-usuario.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuscripcionUsuarioService } from './suscripcion-usuario.service';
import { CreateSuscripcionUsuarioDto } from './dto/create-suscripcion-usuario.dto';
import { UpdateSuscripcionUsuarioDto } from './dto/update-suscripcion-usuario.dto';

@Controller('suscripcion-usuario')
export class SuscripcionUsuarioController {
  constructor(
    private readonly suscripcionUsuarioService: SuscripcionUsuarioService,
  ) { }

  @Post()
  create(@Body() createSuscripcionUsuarioDto: CreateSuscripcionUsuarioDto) {
    return this.suscripcionUsuarioService.create(createSuscripcionUsuarioDto);
  }

  @Get()
  findAll() {
    return this.suscripcionUsuarioService.findAll();
  }

  @Get(':idSuscripcionUsuario')
  findOne(@Param('idSuscripcionUsuario') idSuscripcionUsuario: string) {
    return this.suscripcionUsuarioService.findOne(+idSuscripcionUsuario);
  }

  @Patch(':idSuscripcionUsuario')
  update(
    @Param('idSuscripcionUsuario') idSuscripcionUsuario: string,
    @Body() updateSuscripcionUsuarioDto: UpdateSuscripcionUsuarioDto,
  ) {
    return this.suscripcionUsuarioService.update(
      +idSuscripcionUsuario,
      updateSuscripcionUsuarioDto,
    );
  }

  @Delete(':idSuscripcionUsuario')
  remove(@Param('idSuscripcionUsuario') idSuscripcionUsuario: string) {
    return this.suscripcionUsuarioService.remove(+idSuscripcionUsuario);
  }
}