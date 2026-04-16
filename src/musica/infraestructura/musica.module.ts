// src/musica/infraestructura/musica.module.ts:
import { Module } from '@nestjs/common';
import { MusicaApplication } from '../aplicacion/musica.application';
import { MusicaRepository } from '../dominio/musica.repository';
import { MusicaController } from './musica.controller';
import { MusicaService } from './musica.service';

@Module({
  controllers: [MusicaController],
  providers: [
    MusicaApplication,
    MusicaService,
    {
      provide: MusicaRepository,
      useExisting: MusicaService,
    },
  ],
})
export class MusicaModule { }