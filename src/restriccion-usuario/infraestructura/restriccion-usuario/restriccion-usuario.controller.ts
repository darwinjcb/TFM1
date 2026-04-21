// src/restriccion-usuario/infraestructura/restriccion-usuario/restriccion-usuario.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestriccionUsuarioService } from './restriccion-usuario.service';
import { CreateRestriccionUsuarioDto } from './dto/create-restriccion-usuario.dto';
import { UpdateRestriccionUsuarioDto } from './dto/update-restriccion-usuario.dto';

@Controller('restriccion-usuario')
export class RestriccionUsuarioController {
  constructor(private readonly restriccionUsuarioService: RestriccionUsuarioService) { }

  @Post()
  create(@Body() createRestriccionUsuarioDto: CreateRestriccionUsuarioDto) {
    return this.restriccionUsuarioService.create(createRestriccionUsuarioDto);
  }

  @Get()
  findAll() {
    return this.restriccionUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restriccionUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestriccionUsuarioDto: UpdateRestriccionUsuarioDto) {
    return this.restriccionUsuarioService.update(+id, updateRestriccionUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restriccionUsuarioService.remove(+id);
  }
}
