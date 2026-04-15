// src/interaccion/infraestructura/interaccion.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InteraccionApplication } from '../aplicacion/interaccion.application';
import { CreateInteraccionDto } from './create-interaccion.dto';
import { UpdateInteraccionDto } from './update-interaccion.dto';

@Controller('interaccion')
export class InteraccionController {
  constructor(
    private readonly interaccionApplication: InteraccionApplication,
  ) { }

  @Post()
  create(@Body() createInteraccionDto: CreateInteraccionDto) {
    return this.interaccionApplication.create(createInteraccionDto);
  }

  @Get()
  findAll() {
    return this.interaccionApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interaccionApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInteraccionDto: UpdateInteraccionDto,
  ) {
    return this.interaccionApplication.update(
      Number(id),
      updateInteraccionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interaccionApplication.remove(Number(id));
  }
}