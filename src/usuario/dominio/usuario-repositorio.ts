// src/usuario/dominio/usuario-repositorio.ts:
import { Usuario } from './usuario';

export const USUARIO_REPOSITORIO = 'USUARIO_REPOSITORIO';

export interface CrearUsuarioDatos {
    nombre: string;
    edad: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero: string;
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
    fotos?: string[];
    estaActivo?: boolean;
}

export interface ActualizarUsuarioDatos {
    nombre?: string;
    edad?: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero?: string;
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo?: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
    fotos?: string[];
    estaActivo?: boolean;
}

export interface UsuarioRepositorio {
    crear(datos: CrearUsuarioDatos): Promise<Usuario>;
    obtenerTodos(): Promise<Usuario[]>;
    obtenerPorId(idUsuario: number): Promise<Usuario | null>;
    actualizar(
        idUsuario: number,
        datos: ActualizarUsuarioDatos,
    ): Promise<Usuario>;
    eliminar(idUsuario: number): Promise<Usuario>;
}