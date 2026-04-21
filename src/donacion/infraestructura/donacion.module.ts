// src/donacion/infraestructura/donacion.module.ts:
import { Module } from '@nestjs/common';
import { DonacionApplication } from '../aplicacion/donacion.application';
import { DonacionRepository } from '../dominio/donacion.repository';
import { DonacionController } from './donacion.controller';
import { DonacionService } from './donacion.service';

@Module({
  controllers: [DonacionController],
  providers: [
    DonacionApplication,
    DonacionService,
    {
      provide: DonacionRepository,
      useExisting: DonacionService,
    },
  ],
})
export class DonacionModule { }