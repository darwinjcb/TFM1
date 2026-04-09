// src/suscripcion-usuario/suscripcion-usuario.module.ts:
import { Module } from '@nestjs/common';
import { SuscripcionUsuarioService } from './suscripcion-usuario.service';
import { SuscripcionUsuarioController } from './suscripcion-usuario.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SuscripcionUsuarioController],
  providers: [SuscripcionUsuarioService],
})
export class SuscripcionUsuarioModule { }