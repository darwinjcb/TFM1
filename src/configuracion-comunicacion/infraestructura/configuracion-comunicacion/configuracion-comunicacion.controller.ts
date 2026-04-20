// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion/configuracion-comunicacion.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracionComunicacionService } from './configuracion-comunicacion.service';
import { CreateConfiguracionComunicacionDto } from './dto/create-configuracion-comunicacion.dto';
import { UpdateConfiguracionComunicacionDto } from './dto/update-configuracion-comunicacion.dto';

@Controller('configuracion-comunicacion')
export class ConfiguracionComunicacionController {
  constructor(private readonly configuracionComunicacionService: ConfiguracionComunicacionService) { }

  @Post()
  create(@Body() createConfiguracionComunicacionDto: CreateConfiguracionComunicacionDto) {
    return this.configuracionComunicacionService.create(createConfiguracionComunicacionDto);
  }

  @Get()
  findAll() {
    return this.configuracionComunicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracionComunicacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfiguracionComunicacionDto: UpdateConfiguracionComunicacionDto) {
    return this.configuracionComunicacionService.update(+id, updateConfiguracionComunicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracionComunicacionService.remove(+id);
  }
}
