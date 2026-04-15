// src/match/infraestructura/match.controller.ts:
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MatchApplication } from '../aplicacion/match.application';
import { CreateMatchDto } from './create-match.dto';
import { UpdateMatchDto } from './update-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchApplication: MatchApplication) { }

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchApplication.create(createMatchDto);
  }

  @Get()
  findAll() {
    return this.matchApplication.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchApplication.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchApplication.update(Number(id), updateMatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchApplication.remove(Number(id));
  }
}