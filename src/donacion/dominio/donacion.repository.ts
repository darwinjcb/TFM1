// src/donacion/dominio/donacion.repository.ts:
import { ActualizarDonacion, CrearDonacion, Donacion, } from './donacion';

export abstract class DonacionRepository {
    abstract create(data: CrearDonacion): Promise<Donacion>;
    abstract findAll(): Promise<Donacion[]>;
    abstract findOne(idDonacion: number): Promise<Donacion>;
    abstract update(
        idDonacion: number,
        data: ActualizarDonacion,
    ): Promise<Donacion>;
    abstract remove(idDonacion: number): Promise<Donacion>;
}