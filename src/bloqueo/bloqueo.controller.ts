// src/bloqueo/bloqueo.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BloqueoService } from './bloqueo.service';
import { CreateBloqueoDto } from './dto/create-bloqueo.dto';
import { UpdateBloqueoDto } from './dto/update-bloqueo.dto';

@Controller('bloqueo')
export class BloqueoController {
  constructor(private readonly bloqueoService: BloqueoService) { }

  @Post()
  create(@Body() createBloqueoDto: CreateBloqueoDto) {
    return this.bloqueoService.create(createBloqueoDto);
  }

  @Get()
  findAll() {
    return this.bloqueoService.findAll();
  }

  @Get(':idBloqueo')
  findOne(@Param('idBloqueo') idBloqueo: string) {
    return this.bloqueoService.findOne(+idBloqueo);
  }

  @Patch(':idBloqueo')
  update(
    @Param('idBloqueo') idBloqueo: string,
    @Body() updateBloqueoDto: UpdateBloqueoDto,
  ) {
    return this.bloqueoService.update(+idBloqueo, updateBloqueoDto);
  }

  @Delete(':idBloqueo')
  remove(@Param('idBloqueo') idBloqueo: string) {
    return this.bloqueoService.remove(+idBloqueo);
  }
}