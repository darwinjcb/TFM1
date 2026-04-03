// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { InteraccionesModule } from './interacciones/interacciones.module';
import { MatchesModule } from './matches/matches.module';
import { ChatsModule } from './chats/chats.module';
import { MusicaModule } from './musica/musica.module';
import { LiveModule } from './live/live.module';

@Module({
  imports: [UsuariosModule, SuscripcionesModule, InteraccionesModule, MatchesModule, ChatsModule, MusicaModule, LiveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
