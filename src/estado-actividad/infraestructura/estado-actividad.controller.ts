// src/estado-actividad/infraestructura/estado-actividad.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoActividadService } from './estado-actividad.service';
import { CreateEstadoActividadDto } from './create-estado-actividad.dto';
import { UpdateEstadoActividadDto } from './update-estado-actividad.dto';

@Controller('estado-actividad')
export class EstadoActividadController {
  constructor(private readonly estadoActividadService: EstadoActividadService) { }

  @Post()
  create(@Body() createEstadoActividadDto: CreateEstadoActividadDto) {
    return this.estadoActividadService.create(createEstadoActividadDto);
  }

  @Get()
  findAll() {
    return this.estadoActividadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoActividadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoActividadDto: UpdateEstadoActividadDto) {
    return this.estadoActividadService.update(+id, updateEstadoActividadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoActividadService.remove(+id);
  }
}
