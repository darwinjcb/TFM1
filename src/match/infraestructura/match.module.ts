// src/match/infraestructura/match.module.ts:
import { Module } from '@nestjs/common';
import { MatchApplication } from '../aplicacion/match.application';
import { MatchRepository } from '../dominio/match.repository';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  controllers: [MatchController],
  providers: [
    MatchApplication,
    MatchService,
    {
      provide: MatchRepository,
      useExisting: MatchService,
    },
  ],
})
export class MatchModule { }