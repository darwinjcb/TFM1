// src/estado-actividad/dominio/estado-actividad.ts:
export interface EstadoActividad {
    idEstadoActividad: number;
    idUsuario: number;
    estaActivo: boolean;
    enLive: boolean;
    ultimaConexion?: Date | null;
    usuario?: unknown;
}

export interface CrearEstadoActividad {
    idUsuario: number;
    estaActivo?: boolean;
    enLive?: boolean;
    ultimaConexion?: string;
}

export interface ActualizarEstadoActividad {
    estaActivo?: boolean;
    enLive?: boolean;
    ultimaConexion?: string;
}