// src/foto-usuario/aplicacion/foto-usuario.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarFotoUsuario, CrearFotoUsuario, } from '../dominio/foto-usuario';
import { FotoUsuarioRepository } from '../dominio/foto-usuario.repository';

@Injectable()
export class FotoUsuarioApplication {
    constructor(
        private readonly fotoUsuarioRepository: FotoUsuarioRepository,
    ) { }

    create(data: CrearFotoUsuario) {
        return this.fotoUsuarioRepository.create(data);
    }

    findAll() {
        return this.fotoUsuarioRepository.findAll();
    }

    findOne(idFoto: number) {
        return this.fotoUsuarioRepository.findOne(idFoto);
    }

    update(idFoto: number, data: ActualizarFotoUsuario) {
        return this.fotoUsuarioRepository.update(idFoto, data);
    }

    remove(idFoto: number) {
        return this.fotoUsuarioRepository.remove(idFoto);
    }
}