// src/chat/dominio/chat.ts:
export interface Chat {
    idChat: number;
    idUsuarioUno: number;
    idUsuarioDos: number;
    fechaCreacion: Date;
    usuarioUno?: unknown;
    usuarioDos?: unknown;
    mensajes?: unknown[];
}

export interface CrearChat {
    idUsuarioUno: number;
    idUsuarioDos: number;
}

export interface ActualizarChat { }