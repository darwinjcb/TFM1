// src/bloqueo/aplicacion/bloqueo.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarBloqueo, CrearBloqueo } from '../dominio/bloqueo';
import { BloqueoRepository } from '../dominio/bloqueo.repository';

@Injectable()
export class BloqueoApplication {
    constructor(private readonly bloqueoRepository: BloqueoRepository) { }

    create(data: CrearBloqueo) {
        return this.bloqueoRepository.create(data);
    }

    findAll() {
        return this.bloqueoRepository.findAll();
    }

    findOne(idBloqueo: number) {
        return this.bloqueoRepository.findOne(idBloqueo);
    }

    update(idBloqueo: number, data: ActualizarBloqueo) {
        return this.bloqueoRepository.update(idBloqueo, data);
    }

    remove(idBloqueo: number) {
        return this.bloqueoRepository.remove(idBloqueo);
    }
}