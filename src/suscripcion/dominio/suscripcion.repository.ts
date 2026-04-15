// src/suscripcion/dominio/suscripcion.repository.ts:
import {
    ActualizarSuscripcionUsuario,
    CrearSuscripcionUsuario,
    SuscripcionUsuario,
} from './suscripcion';

export abstract class SuscripcionRepository {
    abstract create(
        data: CrearSuscripcionUsuario,
    ): Promise<SuscripcionUsuario>;

    abstract findAll(): Promise<SuscripcionUsuario[]>;

    abstract findOne(
        idSuscripcionUsuario: number,
    ): Promise<SuscripcionUsuario>;

    abstract update(
        idSuscripcionUsuario: number,
        data: ActualizarSuscripcionUsuario,
    ): Promise<SuscripcionUsuario>;

    abstract remove(
        idSuscripcionUsuario: number,
    ): Promise<SuscripcionUsuario>;
}