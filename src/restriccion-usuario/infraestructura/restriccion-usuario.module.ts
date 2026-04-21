// src/restriccion-usuario/infraestructura/restriccion-usuario.module.ts:
import { Module } from '@nestjs/common';
import { RestriccionUsuarioApplication } from '../aplicacion/restriccion-usuario.application';
import { RestriccionUsuarioRepository } from '../dominio/restriccion-usuario.repository';
import { RestriccionUsuarioController } from './restriccion-usuario.controller';
import { RestriccionUsuarioService } from './restriccion-usuario.service';

@Module({
  controllers: [RestriccionUsuarioController],
  providers: [
    RestriccionUsuarioApplication,
    RestriccionUsuarioService,
    {
      provide: RestriccionUsuarioRepository,
      useExisting: RestriccionUsuarioService,
    },
  ],
})
export class RestriccionUsuarioModule { }