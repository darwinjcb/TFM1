// src/restriccion-usuario/infraestructura/restriccion-usuario.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RestriccionUsuarioApplication } from '../aplicacion/restriccion-usuario.application';
import { CreateRestriccionUsuarioDto } from './create-restriccion-usuario.dto';
import { UpdateRestriccionUsuarioDto } from './update-restriccion-usuario.dto';

@Controller('restriccion-usuario')
export class RestriccionUsuarioController {
  constructor(
    private readonly restriccionUsuarioApplication: RestriccionUsuarioApplication,
  ) { }

  @Post()
  create(@Body() createRestriccionUsuarioDto: CreateRestriccionUsuarioDto) {
    return this.restriccionUsuarioApplication.create(
      createRestriccionUsuarioDto,
    );
  }

  @Get()
  findAll() {
    return this.restriccionUsuarioApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restriccionUsuarioApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestriccionUsuarioDto: UpdateRestriccionUsuarioDto,
  ) {
    return this.restriccionUsuarioApplication.update(
      Number(id),
      updateRestriccionUsuarioDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restriccionUsuarioApplication.remove(Number(id));
  }
}