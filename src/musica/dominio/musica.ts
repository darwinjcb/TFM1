// src/musica/dominio/musica.ts:
export interface Musica {
    idMusica: number;
    titulo: string;
    artista?: string | null;
    album?: string | null;
    enlaceSpotify?: string | null;
    fechaCreacion: Date;
}

export interface MusicaUsuario {
    idMusicaUsuario: number;
    idUsuario: number;
    idMusica: number;
    usuario?: unknown;
    musica?: Musica;
}

export interface CrearMusicaUsuario {
    idUsuario: number;
    titulo: string;
    artista?: string;
    album?: string;
    enlaceSpotify?: string;
}

export interface ActualizarMusicaUsuario {
    titulo?: string;
    artista?: string;
    album?: string;
    enlaceSpotify?: string;
}