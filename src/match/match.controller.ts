// src/match/match.controller.ts:
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) { }

  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @Get(':idMatch')
  findOne(@Param('idMatch') idMatch: string) {
    return this.matchService.findOne(+idMatch);
  }

  @Patch(':idMatch')
  update(
    @Param('idMatch') idMatch: string,
    @Body() updateMatchDto: UpdateMatchDto,
  ) {
    return this.matchService.update(+idMatch, updateMatchDto);
  }

  @Delete(':idMatch')
  remove(@Param('idMatch') idMatch: string) {
    return this.matchService.remove(+idMatch);
  }
}