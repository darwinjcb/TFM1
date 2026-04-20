// src/estado-actividad/infraestructura/estado-actividad.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstadoActividadApplication } from '../aplicacion/estado-actividad.application';
import { CreateEstadoActividadDto } from './create-estado-actividad.dto';
import { UpdateEstadoActividadDto } from './update-estado-actividad.dto';

@Controller('estado-actividad')
export class EstadoActividadController {
  constructor(
    private readonly estadoActividadApplication: EstadoActividadApplication,
  ) { }

  @Post()
  create(@Body() createEstadoActividadDto: CreateEstadoActividadDto) {
    return this.estadoActividadApplication.create(createEstadoActividadDto);
  }

  @Get()
  findAll() {
    return this.estadoActividadApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoActividadApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstadoActividadDto: UpdateEstadoActividadDto,
  ) {
    return this.estadoActividadApplication.update(
      Number(id),
      updateEstadoActividadDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoActividadApplication.remove(Number(id));
  }
}