// src/bloqueo/dominio/bloqueo.repository.ts:
import { ActualizarBloqueo, Bloqueo, CrearBloqueo } from './bloqueo';

export abstract class BloqueoRepository {
    abstract create(data: CrearBloqueo): Promise<Bloqueo>;
    abstract findAll(): Promise<Bloqueo[]>;
    abstract findOne(idBloqueo: number): Promise<Bloqueo>;
    abstract update(idBloqueo: number, data: ActualizarBloqueo): Promise<Bloqueo>;
    abstract remove(idBloqueo: number): Promise<Bloqueo>;
}