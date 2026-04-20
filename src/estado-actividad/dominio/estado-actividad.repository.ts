// src/estado-actividad/dominio/estado-actividad.repository.ts:
import {
    ActualizarEstadoActividad,
    CrearEstadoActividad,
    EstadoActividad,
} from './estado-actividad';

export abstract class EstadoActividadRepository {
    abstract create(data: CrearEstadoActividad): Promise<EstadoActividad>;
    abstract findAll(): Promise<EstadoActividad[]>;
    abstract findOne(idEstadoActividad: number): Promise<EstadoActividad>;
    abstract update(
        idEstadoActividad: number,
        data: ActualizarEstadoActividad,
    ): Promise<EstadoActividad>;
    abstract remove(idEstadoActividad: number): Promise<EstadoActividad>;
}