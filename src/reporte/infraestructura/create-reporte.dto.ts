// src/reporte/infraestructura/create-reporte.dto.ts:
export class CreateReporteDto {
    idUsuarioReportador: number;
    idUsuarioReportado: number;
    descripcion?: string;
}