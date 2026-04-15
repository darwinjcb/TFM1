// src/interaccion/aplicacion/interaccion.application.ts:
import { Injectable } from '@nestjs/common';
import {
    ActualizarInteraccion,
    CrearInteraccion,
} from '../dominio/interaccion';
import { InteraccionRepository } from '../dominio/interaccion.repository';

@Injectable()
export class InteraccionApplication {
    constructor(
        private readonly interaccionRepository: InteraccionRepository,
    ) { }

    create(data: CrearInteraccion) {
        return this.interaccionRepository.create(data);
    }

    findAll() {
        return this.interaccionRepository.findAll();
    }

    findOne(idInteraccion: number) {
        return this.interaccionRepository.findOne(idInteraccion);
    }

    update(
        idInteraccion: number,
        data: ActualizarInteraccion,
    ) {
        return this.interaccionRepository.update(idInteraccion, data);
    }

    remove(idInteraccion: number) {
        return this.interaccionRepository.remove(idInteraccion);
    }
}