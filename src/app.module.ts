// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { InteraccionModule } from './interaccion/interaccion.module';
import { MatchModule } from './match/match.module';
import { ChatModule } from './chat/chat.module';
import { MensajeModule } from './mensaje/mensaje.module';
import { PlanSuscripcionModule } from './plan-suscripcion/plan-suscripcion.module';
import { SuscripcionUsuarioModule } from './suscripcion-usuario/suscripcion-usuario.module';

@Module({
  imports: [PrismaModule, UsuarioModule, InteraccionModule, MatchModule, ChatModule, MensajeModule, PlanSuscripcionModule, SuscripcionUsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
