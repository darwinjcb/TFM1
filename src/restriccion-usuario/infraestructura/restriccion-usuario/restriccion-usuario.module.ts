// src/restriccion-usuario/infraestructura/restriccion-usuario/restriccion-usuario.module.ts:
import { Module } from '@nestjs/common';
import { RestriccionUsuarioService } from './restriccion-usuario.service';
import { RestriccionUsuarioController } from './restriccion-usuario.controller';

@Module({
  controllers: [RestriccionUsuarioController],
  providers: [RestriccionUsuarioService],
})
export class RestriccionUsuarioModule { }
