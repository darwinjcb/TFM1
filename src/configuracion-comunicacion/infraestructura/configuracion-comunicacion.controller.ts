// src/configuracion-comunicacion/infraestructura/configuracion-comunicacion.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ConfiguracionComunicacionApplication } from '../aplicacion/configuracion-comunicacion.application';
import { CreateConfiguracionComunicacionDto } from './create-configuracion-comunicacion.dto';
import { UpdateConfiguracionComunicacionDto } from './update-configuracion-comunicacion.dto';

@Controller('configuracion-comunicacion')
export class ConfiguracionComunicacionController {
  constructor(
    private readonly configuracionComunicacionApplication: ConfiguracionComunicacionApplication,
  ) { }

  @Post()
  create(
    @Body()
    createConfiguracionComunicacionDto: CreateConfiguracionComunicacionDto,
  ) {
    return this.configuracionComunicacionApplication.create(
      createConfiguracionComunicacionDto,
    );
  }

  @Get()
  findAll() {
    return this.configuracionComunicacionApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracionComunicacionApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateConfiguracionComunicacionDto: UpdateConfiguracionComunicacionDto,
  ) {
    return this.configuracionComunicacionApplication.update(
      Number(id),
      updateConfiguracionComunicacionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracionComunicacionApplication.remove(Number(id));
  }
}