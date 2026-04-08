// src/mensaje/mensaje.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { UpdateMensajeDto } from './dto/update-mensaje.dto';

@Controller('mensaje')
export class MensajeController {
  constructor(private readonly mensajeService: MensajeService) { }

  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto) {
    return this.mensajeService.create(createMensajeDto);
  }

  @Get()
  findAll() {
    return this.mensajeService.findAll();
  }

  @Get(':idMensaje')
  findOne(@Param('idMensaje') idMensaje: string) {
    return this.mensajeService.findOne(+idMensaje);
  }

  @Patch(':idMensaje')
  update(
    @Param('idMensaje') idMensaje: string,
    @Body() updateMensajeDto: UpdateMensajeDto,
  ) {
    return this.mensajeService.update(+idMensaje, updateMensajeDto);
  }

  @Delete(':idMensaje')
  remove(@Param('idMensaje') idMensaje: string) {
    return this.mensajeService.remove(+idMensaje);
  }
}