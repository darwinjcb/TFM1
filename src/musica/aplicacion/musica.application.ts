// src/musica/aplicacion/musica.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarMusicaUsuario, CrearMusicaUsuario, } from '../dominio/musica';
import { MusicaRepository } from '../dominio/musica.repository';

@Injectable()
export class MusicaApplication {
    constructor(private readonly musicaRepository: MusicaRepository) { }

    create(data: CrearMusicaUsuario) {
        return this.musicaRepository.create(data);
    }

    findAll() {
        return this.musicaRepository.findAll();
    }

    findOne(idMusicaUsuario: number) {
        return this.musicaRepository.findOne(idMusicaUsuario);
    }

    update(
        idMusicaUsuario: number,
        data: ActualizarMusicaUsuario,
    ) {
        return this.musicaRepository.update(idMusicaUsuario, data);
    }

    remove(idMusicaUsuario: number) {
        return this.musicaRepository.remove(idMusicaUsuario);
    }
}