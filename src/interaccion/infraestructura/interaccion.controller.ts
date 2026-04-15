// src/interaccion/infraestructura/interaccion.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { InteraccionService } from './interaccion.service';
import { CreateInteraccionDto } from './/create-interaccion.dto';
import { UpdateInteraccionDto } from './/update-interaccion.dto';

@Controller('interaccion')
export class InteraccionController {
  constructor(private readonly interaccionService: InteraccionService) { }

  @Post()
  create(@Body() createInteraccionDto: CreateInteraccionDto) {
    return this.interaccionService.create(createInteraccionDto);
  }

  @Get()
  findAll() {
    return this.interaccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interaccionService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInteraccionDto: UpdateInteraccionDto) {
    return this.interaccionService.update(Number(id), updateInteraccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interaccionService.remove(Number(id));
  }
}