// src/donacion/infraestructura/donacion.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DonacionApplication } from '../aplicacion/donacion.application';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';

@Controller('donacion')
export class DonacionController {
  constructor(private readonly donacionApplication: DonacionApplication) { }

  @Post()
  create(@Body() createDonacionDto: CreateDonacionDto) {
    return this.donacionApplication.create(createDonacionDto);
  }

  @Get()
  findAll() {
    return this.donacionApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donacionApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonacionDto: UpdateDonacionDto) {
    return this.donacionApplication.update(Number(id), updateDonacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donacionApplication.remove(Number(id));
  }
}