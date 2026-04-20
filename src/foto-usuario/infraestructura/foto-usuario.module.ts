// src/foto-usuario/infraestructura/foto-usuario.module.ts:
import { Module } from '@nestjs/common';
import { FotoUsuarioApplication } from '../aplicacion/foto-usuario.application';
import { FotoUsuarioRepository } from '../dominio/foto-usuario.repository';
import { FotoUsuarioController } from './foto-usuario.controller';
import { FotoUsuarioService } from './foto-usuario.service';

@Module({
  controllers: [FotoUsuarioController],
  providers: [
    FotoUsuarioApplication,
    FotoUsuarioService,
    {
      provide: FotoUsuarioRepository,
      useExisting: FotoUsuarioService,
    },
  ],
})
export class FotoUsuarioModule { }