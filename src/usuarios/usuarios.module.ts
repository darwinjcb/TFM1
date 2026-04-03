// src/usuarios/usuarios.module.ts:
import { Module } from '@nestjs/common';
import { UsuariosController } from './infraestructura/usuarios.controller';
import { UsuariosService } from './aplicacion/usuarios.service';

@Module({
    controllers: [UsuariosController],
    providers: [UsuariosService],
})
export class UsuariosModule { }