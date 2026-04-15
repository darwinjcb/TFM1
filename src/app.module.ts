// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/infraestructura/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { SuscripcionModule } from './suscripcion/infraestructura/suscripcion.module';
import { InteraccionModule } from './interaccion/infraestructura/interaccion.module';
import { MatchModule } from './match/infraestructura/match.module';
import { ChatModule } from './chat/infraestructura/chat.module';

@Module({
  imports: [UsuarioModule, PrismaModule, SuscripcionModule, InteraccionModule, MatchModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
