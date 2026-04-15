// src/interaccion/dominio/interaccion.repository.ts:
import { ActualizarInteraccion, CrearInteraccion, Interaccion, } from './interaccion';

export abstract class InteraccionRepository {
    abstract create(data: CrearInteraccion): Promise<Interaccion>;
    abstract findAll(): Promise<Interaccion[]>;
    abstract findOne(idInteraccion: number): Promise<Interaccion>;
    abstract update(
        idInteraccion: number,
        data: ActualizarInteraccion,
    ): Promise<Interaccion>;
    abstract remove(idInteraccion: number): Promise<Interaccion>;
}