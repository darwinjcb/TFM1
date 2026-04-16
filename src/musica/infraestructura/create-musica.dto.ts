// src/musica/infraestructura/create-musica.dto.ts:
export class CreateMusicaDto {
    idUsuario: number;
    titulo: string;
    artista?: string;
    album?: string;
    enlaceSpotify?: string;
}