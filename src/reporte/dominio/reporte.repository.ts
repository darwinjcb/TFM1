// src/reporte/dominio/reporte.repository.ts:
import { ActualizarReporte, CrearReporte, Reporte } from './reporte';

export abstract class ReporteRepository {
    abstract create(data: CrearReporte): Promise<Reporte>;
    abstract findAll(): Promise<Reporte[]>;
    abstract findOne(idReporte: number): Promise<Reporte>;
    abstract update(idReporte: number, data: ActualizarReporte): Promise<Reporte>;
    abstract remove(idReporte: number): Promise<Reporte>;
}