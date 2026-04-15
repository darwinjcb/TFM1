// src/match/dominio/match.repository.ts:
import { ActualizarMatch, CrearMatch, Match } from './match';

export abstract class MatchRepository {
    abstract create(data: CrearMatch): Promise<Match>;
    abstract findAll(): Promise<Match[]>;
    abstract findOne(idMatch: number): Promise<Match>;
    abstract update(idMatch: number, data: ActualizarMatch): Promise<Match>;
    abstract remove(idMatch: number): Promise<Match>;
}