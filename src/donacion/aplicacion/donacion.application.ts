// src/donacion/aplicacion/donacion.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarDonacion, CrearDonacion, } from '../dominio/donacion';
import { DonacionRepository } from '../dominio/donacion.repository';

@Injectable()
export class DonacionApplication {
    constructor(
        private readonly donacionRepository: DonacionRepository,
    ) { }

    create(data: CrearDonacion) {
        return this.donacionRepository.create(data);
    }

    findAll() {
        return this.donacionRepository.findAll();
    }

    findOne(idDonacion: number) {
        return this.donacionRepository.findOne(idDonacion);
    }

    update(idDonacion: number, data: ActualizarDonacion) {
        return this.donacionRepository.update(idDonacion, data);
    }

    remove(idDonacion: number) {
        return this.donacionRepository.remove(idDonacion);
    }
}