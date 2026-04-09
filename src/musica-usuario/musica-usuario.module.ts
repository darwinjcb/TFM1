// src/musica-usuario/musica-usuario.module.ts:
import { Module } from '@nestjs/common';
import { MusicaUsuarioService } from './musica-usuario.service';
import { MusicaUsuarioController } from './musica-usuario.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MusicaUsuarioController],
  providers: [MusicaUsuarioService],
})
export class MusicaUsuarioModule { }