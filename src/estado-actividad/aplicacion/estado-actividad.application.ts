// src/estado-actividad/aplicacion/estado-actividad.application.ts:
import { Injectable } from '@nestjs/common';
import {
    ActualizarEstadoActividad,
    CrearEstadoActividad,
} from '../dominio/estado-actividad';
import { EstadoActividadRepository } from '../dominio/estado-actividad.repository';

@Injectable()
export class EstadoActividadApplication {
    constructor(
        private readonly estadoActividadRepository: EstadoActividadRepository,
    ) { }

    create(data: CrearEstadoActividad) {
        return this.estadoActividadRepository.create(data);
    }

    findAll() {
        return this.estadoActividadRepository.findAll();
    }

    findOne(idEstadoActividad: number) {
        return this.estadoActividadRepository.findOne(idEstadoActividad);
    }

    update(
        idEstadoActividad: number,
        data: ActualizarEstadoActividad,
    ) {
        return this.estadoActividadRepository.update(idEstadoActividad, data);
    }

    remove(idEstadoActividad: number) {
        return this.estadoActividadRepository.remove(idEstadoActividad);
    }
}