// src/match/aplicacion/match.application.ts:
import { Injectable } from '@nestjs/common';
import { ActualizarMatch, CrearMatch } from '../dominio/match';
import { MatchRepository } from '../dominio/match.repository';

@Injectable()
export class MatchApplication {
    constructor(private readonly matchRepository: MatchRepository) { }

    create(data: CrearMatch) {
        return this.matchRepository.create(data);
    }

    findAll() {
        return this.matchRepository.findAll();
    }

    findOne(idMatch: number) {
        return this.matchRepository.findOne(idMatch);
    }

    update(idMatch: number, data: ActualizarMatch) {
        return this.matchRepository.update(idMatch, data);
    }

    remove(idMatch: number) {
        return this.matchRepository.remove(idMatch);
    }
}