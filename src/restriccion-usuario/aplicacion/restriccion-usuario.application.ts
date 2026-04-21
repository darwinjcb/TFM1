// src/restriccion-usuario/aplicacion/restriccion-usuario.application.ts:
import { Injectable } from '@nestjs/common';
import {
    ActualizarRestriccionUsuario,
    CrearRestriccionUsuario,
} from '../dominio/restriccion-usuario';
import { RestriccionUsuarioRepository } from '../dominio/restriccion-usuario.repository';

@Injectable()
export class RestriccionUsuarioApplication {
    constructor(
        private readonly restriccionUsuarioRepository: RestriccionUsuarioRepository,
    ) { }

    create(data: CrearRestriccionUsuario) {
        return this.restriccionUsuarioRepository.create(data);
    }

    findAll() {
        return this.restriccionUsuarioRepository.findAll();
    }

    findOne(idRestriccion: number) {
        return this.restriccionUsuarioRepository.findOne(idRestriccion);
    }

    update(
        idRestriccion: number,
        data: ActualizarRestriccionUsuario,
    ) {
        return this.restriccionUsuarioRepository.update(idRestriccion, data);
    }

    remove(idRestriccion: number) {
        return this.restriccionUsuarioRepository.remove(idRestriccion);
    }
}