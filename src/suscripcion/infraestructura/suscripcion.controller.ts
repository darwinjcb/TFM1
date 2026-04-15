// src/suscripcion/infraestructura/suscripcion.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SuscripcionApplication } from '../aplicacion/suscripcion.application';
import { CreateSuscripcionDto } from './create-suscripcion.dto';
import { UpdateSuscripcionDto } from './update-suscripcion.dto';

@Controller('suscripcion')
export class SuscripcionController {
  constructor(
    private readonly suscripcionApplication: SuscripcionApplication,
  ) { }

  @Post()
  create(@Body() createSuscripcionDto: CreateSuscripcionDto) {
    return this.suscripcionApplication.create(createSuscripcionDto);
  }

  @Get()
  findAll() {
    return this.suscripcionApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suscripcionApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSuscripcionDto: UpdateSuscripcionDto,
  ) {
    return this.suscripcionApplication.update(
      Number(id),
      updateSuscripcionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suscripcionApplication.remove(Number(id));
  }
}