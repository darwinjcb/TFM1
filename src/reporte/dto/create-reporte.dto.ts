// src/reporte/dto/create-reporte.dto.ts:
import { MotivoReporte } from '../../../generated/prisma/client';

export class CreateReporteDto {
    idUsuarioReportador: number;
    idUsuarioReportado: number;
    motivo: MotivoReporte;
    descripcion?: string;
}