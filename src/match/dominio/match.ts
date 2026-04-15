// src/match/dominio/match.ts:
export interface Match {
    idMatch: number;
    idUsuarioUno: number;
    idUsuarioDos: number;
    fechaCreacion: Date;
    activo: boolean;
    usuarioUno?: unknown;
    usuarioDos?: unknown;
}

export interface CrearMatch {
    idUsuarioUno: number;
    idUsuarioDos: number;
}

export interface ActualizarMatch {
    activo?: boolean;
}