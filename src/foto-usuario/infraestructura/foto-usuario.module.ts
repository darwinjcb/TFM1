// src/foto-usuario/infraestructura/foto-usuario.module.ts:
import { Module } from '@nestjs/common';
import { FotoUsuarioService } from './foto-usuario.service';
import { FotoUsuarioController } from './foto-usuario.controller';

@Module({
  controllers: [FotoUsuarioController],
  providers: [FotoUsuarioService],
})
export class FotoUsuarioModule { }
