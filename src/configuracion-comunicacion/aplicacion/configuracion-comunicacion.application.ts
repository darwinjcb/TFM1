// src/configuracion-comunicacion/aplicacion/configuracion-comunicacion.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarConfiguracionComunicacion, CrearConfiguracionComunicacion, } from '../dominio/configuracion-comunicacion';
import { ConfiguracionComunicacionRepository } from '../dominio/configuracion-comunicacion.repository';

@Injectable()
export class ConfiguracionComunicacionApplication {
    constructor(
        private readonly configuracionComunicacionRepository: ConfiguracionComunicacionRepository,
    ) { }

    create(data: CrearConfiguracionComunicacion) {
        return this.configuracionComunicacionRepository.create(data);
    }

    findAll() {
        return this.configuracionComunicacionRepository.findAll();
    }

    findOne(idConfiguracionComunicacion: number) {
        return this.configuracionComunicacionRepository.findOne(
            idConfiguracionComunicacion,
        );
    }

    update(
        idConfiguracionComunicacion: number,
        data: ActualizarConfiguracionComunicacion,
    ) {
        return this.configuracionComunicacionRepository.update(
            idConfiguracionComunicacion,
            data,
        );
    }

    remove(idConfiguracionComunicacion: number) {
        return this.configuracionComunicacionRepository.remove(
            idConfiguracionComunicacion,
        );
    }
}
