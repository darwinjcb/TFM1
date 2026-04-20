// src/configuracion-comunicacion/dominio/configuracion-comunicacion.repository.ts:
import { ActualizarConfiguracionComunicacion, ConfiguracionComunicacion, CrearConfiguracionComunicacion, } from './configuracion-comunicacion';

export abstract class ConfiguracionComunicacionRepository {
    abstract create(
        data: CrearConfiguracionComunicacion,
    ): Promise<ConfiguracionComunicacion>;

    abstract findAll(): Promise<ConfiguracionComunicacion[]>;

    abstract findOne(
        idConfiguracionComunicacion: number,
    ): Promise<ConfiguracionComunicacion>;

    abstract update(
        idConfiguracionComunicacion: number,
        data: ActualizarConfiguracionComunicacion,
    ): Promise<ConfiguracionComunicacion>;

    abstract remove(
        idConfiguracionComunicacion: number,
    ): Promise<ConfiguracionComunicacion>;
}
