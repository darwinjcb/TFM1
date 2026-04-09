// src/musica/musica.module.ts:
import { Module } from '@nestjs/common';
import { MusicaService } from './musica.service';
import { MusicaController } from './musica.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MusicaController],
  providers: [MusicaService],
})
export class MusicaModule { }