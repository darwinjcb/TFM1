// src/usuario/infraestructura/usuario.module.ts:
import { Module } from '@nestjs/common';
import { UsuarioApplication } from '../aplicacion/usuario.application';
import { UsuarioRepository } from '../dominio/usuario.repository';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioApplication,
    UsuarioService,
    {
      provide: UsuarioRepository,
      useExisting: UsuarioService,
    },
  ],
})
export class UsuarioModule { }