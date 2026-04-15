// src/usuario/aplicacion/usuario.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarUsuario, CrearUsuario } from '../dominio/usuario';
import { UsuarioRepository } from '../dominio/usuario.repository';

@Injectable()
export class UsuarioApplication {
    constructor(private readonly usuarioRepository: UsuarioRepository) { }

    create(data: CrearUsuario) {
        return this.usuarioRepository.create(data);
    }

    findAll() {
        return this.usuarioRepository.findAll();
    }

    findOne(idUsuario: number) {
        return this.usuarioRepository.findOne(idUsuario);
    }

    update(idUsuario: number, data: ActualizarUsuario) {
        return this.usuarioRepository.update(idUsuario, data);
    }

    remove(idUsuario: number) {
        return this.usuarioRepository.remove(idUsuario);
    }
}