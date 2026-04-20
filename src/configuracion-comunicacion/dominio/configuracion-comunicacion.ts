// src/configuracion-comunicacion/dominio/configuracion-comunicacion.ts:
export interface ConfiguracionComunicacion {
    idConfiguracionComunicacion: number;
    idUsuario: number;
    permiteMensajes: boolean;
    requiereMatchParaChatear: boolean;
    usuario?: unknown;
}

export interface CrearConfiguracionComunicacion {
    idUsuario: number;
    permiteMensajes?: boolean;
    requiereMatchParaChatear?: boolean;
}

export interface ActualizarConfiguracionComunicacion {
    permiteMensajes?: boolean;
    requiereMatchParaChatear?: boolean;
}