// src/suscripcion/aplicacion/suscripcion.application.ts:
import { Injectable } from '@nestjs/common';
import {
    ActualizarSuscripcionUsuario,
    CrearSuscripcionUsuario,
} from '../dominio/suscripcion';
import { SuscripcionRepository } from '../dominio/suscripcion.repository';

@Injectable()
export class SuscripcionApplication {
    constructor(
        private readonly suscripcionRepository: SuscripcionRepository,
    ) { }

    create(data: CrearSuscripcionUsuario) {
        return this.suscripcionRepository.create(data);
    }

    findAll() {
        return this.suscripcionRepository.findAll();
    }

    findOne(idSuscripcionUsuario: number) {
        return this.suscripcionRepository.findOne(idSuscripcionUsuario);
    }

    update(
        idSuscripcionUsuario: number,
        data: ActualizarSuscripcionUsuario,
    ) {
        return this.suscripcionRepository.update(idSuscripcionUsuario, data);
    }

    remove(idSuscripcionUsuario: number) {
        return this.suscripcionRepository.remove(idSuscripcionUsuario);
    }
}
