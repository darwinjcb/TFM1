// src/mensaje/dominio/mensaje.repository.ts:
import { ActualizarMensaje, CrearMensaje, Mensaje } from './mensaje';

export abstract class MensajeRepository {
    abstract create(data: CrearMensaje): Promise<Mensaje>;
    abstract findAll(): Promise<Mensaje[]>;
    abstract findOne(idMensaje: number): Promise<Mensaje>;
    abstract update(
        idMensaje: number,
        data: ActualizarMensaje,
    ): Promise<Mensaje>;
    abstract remove(idMensaje: number): Promise<Mensaje>;
}