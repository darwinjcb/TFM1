// src/mensaje/dominio/mensaje.ts:
export interface Mensaje {
    idMensaje: number;
    idChat: number;
    idRemitente: number;
    contenido: string;
    fechaCreacion: Date;
    leido: boolean;
    chat?: unknown;
    remitente?: unknown;
}

export interface CrearMensaje {
    idChat: number;
    idRemitente: number;
    contenido: string;
}

export interface ActualizarMensaje {
    contenido?: string;
    leido?: boolean;
}