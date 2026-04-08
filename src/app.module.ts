// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { InteraccionModule } from './interaccion/interaccion.module';
import { MatchModule } from './match/match.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [PrismaModule, UsuarioModule, InteraccionModule, MatchModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
