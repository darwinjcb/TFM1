// src/mensaje/aplicacion/mensaje.application.ts:
import { Injectable } from '@nestjs/common';
import {
    ActualizarMensaje,
    CrearMensaje,
} from '../dominio/mensaje';
import { MensajeRepository } from '../dominio/mensaje.repository';

@Injectable()
export class MensajeApplication {
    constructor(private readonly mensajeRepository: MensajeRepository) { }

    create(data: CrearMensaje) {
        return this.mensajeRepository.create(data);
    }

    findAll() {
        return this.mensajeRepository.findAll();
    }

    findOne(idMensaje: number) {
        return this.mensajeRepository.findOne(idMensaje);
    }

    update(idMensaje: number, data: ActualizarMensaje) {
        return this.mensajeRepository.update(idMensaje, data);
    }

    remove(idMensaje: number) {
        return this.mensajeRepository.remove(idMensaje);
    }
}