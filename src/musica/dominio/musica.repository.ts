// src/musica/dominio/musica.repository.ts:
import { ActualizarMusicaUsuario, CrearMusicaUsuario, MusicaUsuario, } from './musica';

export abstract class MusicaRepository {
    abstract create(data: CrearMusicaUsuario): Promise<MusicaUsuario>;
    abstract findAll(): Promise<MusicaUsuario[]>;
    abstract findOne(idMusicaUsuario: number): Promise<MusicaUsuario>;
    abstract update(
        idMusicaUsuario: number,
        data: ActualizarMusicaUsuario,
    ): Promise<MusicaUsuario>;
    abstract remove(idMusicaUsuario: number): Promise<MusicaUsuario>;
}