// src/app.module.ts:
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/infraestructura/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { SuscripcionModule } from './suscripcion/infraestructura/suscripcion/suscripcion.module';

@Module({
  imports: [UsuarioModule, PrismaModule, SuscripcionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
