// src/suscripcion/dominio/suscripcion.ts:
export interface PlanSuscripcion {
    idPlanSuscripcion: number;
    tipo: 'BRONCE' | 'GOLD' | 'PREMIUM' | 'PLATINO';
    valor: unknown;
    beneficios?: string | null;
    restricciones?: string | null;
    mensajesIlimitados: boolean;
    fechaCreacion: Date;
}

export interface SuscripcionUsuario {
    idSuscripcionUsuario: number;
    idUsuario: number;
    idPlanSuscripcion: number;
    fechaInicio: Date;
    fechaFin?: Date | null;
    activa: boolean;
    usuario?: unknown;
    planSuscripcion?: PlanSuscripcion;
}

export interface CrearSuscripcionUsuario {
    idUsuario: number;
    idPlanSuscripcion: number;
    fechaFin?: string;
    activa?: boolean;
}

export interface ActualizarSuscripcionUsuario {
    idPlanSuscripcion?: number;
    fechaFin?: string;
    activa?: boolean;
}