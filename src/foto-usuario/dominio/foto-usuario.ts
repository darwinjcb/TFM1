// src/foto-usuario/dominio/foto-usuario.ts:
export interface FotoUsuario {
    idFoto: number;
    idUsuario: number;
    urlFoto: string;
    descripcion?: string | null;
    usuario?: unknown;
}

export interface CrearFotoUsuario {
    idUsuario: number;
    urlFoto: string;
    descripcion?: string;
}

export interface ActualizarFotoUsuario {
    urlFoto?: string;
    descripcion?: string;
}