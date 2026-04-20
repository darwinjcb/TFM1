// src/bloqueo/dominio/bloqueo.ts:
export interface Bloqueo {
    idBloqueo: number;
    idUsuarioBloqueador: number;
    idUsuarioBloqueado: number;
    fechaCreacion: Date;
    usuarioBloqueador?: unknown;
    usuarioBloqueado?: unknown;
}

export interface CrearBloqueo {
    idUsuarioBloqueador: number;
    idUsuarioBloqueado: number;
}

export interface ActualizarBloqueo { }