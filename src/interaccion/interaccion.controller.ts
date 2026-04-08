// src/interaccion/interaccion.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InteraccionService } from './interaccion.service';
import { CreateInteraccionDto } from './dto/create-interaccion.dto';
import { UpdateInteraccionDto } from './dto/update-interaccion.dto';

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

  @Get(':idInteraccion')
  findOne(@Param('idInteraccion') idInteraccion: string) {
    return this.interaccionService.findOne(+idInteraccion);
  }

  @Patch(':idInteraccion')
  update(
    @Param('idInteraccion') idInteraccion: string,
    @Body() updateInteraccionDto: UpdateInteraccionDto,
  ) {
    return this.interaccionService.update(+idInteraccion, updateInteraccionDto);
  }

  @Delete(':idInteraccion')
  remove(@Param('idInteraccion') idInteraccion: string) {
    return this.interaccionService.remove(+idInteraccion);
  }
}