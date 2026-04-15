// src/interaccion/dominio/interaccion.ts:
export type TipoInteraccion = 'LIKE' | 'NOLIKE' | 'SUPERLIKE';

export interface Interaccion {
    idInteraccion: number;
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    tipoInteraccion: TipoInteraccion;
    fechaCreacion: Date;
    usuarioEmisor?: unknown;
    usuarioReceptor?: unknown;
}

export interface CrearInteraccion {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    tipoInteraccion: TipoInteraccion;
}

export interface ActualizarInteraccion {
    tipoInteraccion?: TipoInteraccion;
}