// src/restriccion-usuario/dominio/restriccion-usuario.ts:
export interface RestriccionUsuario {
    idRestriccion: number;
    idUsuario: number;
    descripcion: string;
    activa: boolean;
    fechaCreacion: Date;
    usuario?: unknown;
}

export interface CrearRestriccionUsuario {
    idUsuario: number;
    descripcion: string;
    activa?: boolean;
}

export interface ActualizarRestriccionUsuario {
    descripcion?: string;
    activa?: boolean;
}
