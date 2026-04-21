// src/donacion/dominio/donacion.ts:
export type EstadoDonacion =
    | 'PENDIENTE'
    | 'COMPLETADA'
    | 'RECHAZADA';

export interface Donacion {
    idDonacion: number;
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    monto: unknown;
    mensaje?: string | null;
    fechaCreacion: Date;
    estadoDonacion: EstadoDonacion;
    usuarioEmisor?: unknown;
    usuarioReceptor?: unknown;
}

export interface CrearDonacion {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    monto: number;
    mensaje?: string;
    estadoDonacion?: EstadoDonacion;
}

export interface ActualizarDonacion {
    monto?: number;
    mensaje?: string;
    estadoDonacion?: EstadoDonacion;
}