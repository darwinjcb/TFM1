// src/reporte/aplicacion/reporte.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarReporte, CrearReporte } from '../dominio/reporte';
import { ReporteRepository } from '../dominio/reporte.repository';

@Injectable()
export class ReporteApplication {
    constructor(private readonly reporteRepository: ReporteRepository) { }

    create(data: CrearReporte) {
        return this.reporteRepository.create(data);
    }

    findAll() {
        return this.reporteRepository.findAll();
    }

    findOne(idReporte: number) {
        return this.reporteRepository.findOne(idReporte);
    }

    update(idReporte: number, data: ActualizarReporte) {
        return this.reporteRepository.update(idReporte, data);
    }

    remove(idReporte: number) {
        return this.reporteRepository.remove(idReporte);
    }
}