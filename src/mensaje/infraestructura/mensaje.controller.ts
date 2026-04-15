// src/mensaje/infraestructura/mensaje.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MensajeApplication } from '../aplicacion/mensaje.application';
import { CreateMensajeDto } from './create-mensaje.dto';
import { UpdateMensajeDto } from './update-mensaje.dto';

@Controller('mensaje')
export class MensajeController {
  constructor(private readonly mensajeApplication: MensajeApplication) { }

  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto) {
    return this.mensajeApplication.create(createMensajeDto);
  }

  @Get()
  findAll() {
    return this.mensajeApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensajeApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensajeDto: UpdateMensajeDto) {
    return this.mensajeApplication.update(Number(id), updateMensajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensajeApplication.remove(Number(id));
  }
}