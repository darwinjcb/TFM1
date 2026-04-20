// src/reporte/dominio/reporte.ts:
export interface Reporte {
    idReporte: number;
    idUsuarioReportador: number;
    idUsuarioReportado: number;
    descripcion?: string | null;
    fechaCreacion: Date;
    usuarioReportador?: unknown;
    usuarioReportado?: unknown;
}

export interface CrearReporte {
    idUsuarioReportador: number;
    idUsuarioReportado: number;
    descripcion?: string;
}

export interface ActualizarReporte {
    descripcion?: string;
}