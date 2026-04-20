// src/bloqueo/infraestructura/bloqueo.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BloqueoApplication } from '../aplicacion/bloqueo.application';
import { CreateBloqueoDto } from './create-bloqueo.dto';
import { UpdateBloqueoDto } from './update-bloqueo.dto';

@Controller('bloqueo')
export class BloqueoController {
  constructor(private readonly bloqueoApplication: BloqueoApplication) { }

  @Post()
  create(@Body() createBloqueoDto: CreateBloqueoDto) {
    return this.bloqueoApplication.create(createBloqueoDto);
  }

  @Get()
  findAll() {
    return this.bloqueoApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bloqueoApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloqueoDto: UpdateBloqueoDto) {
    return this.bloqueoApplication.update(Number(id), updateBloqueoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bloqueoApplication.remove(Number(id));
  }
}