// src/restriccion-usuario/dominio/restriccion-usuario.repository.ts:
import {
    ActualizarRestriccionUsuario,
    CrearRestriccionUsuario,
    RestriccionUsuario,
} from './restriccion-usuario';

export abstract class RestriccionUsuarioRepository {
    abstract create(
        data: CrearRestriccionUsuario,
    ): Promise<RestriccionUsuario>;

    abstract findAll(): Promise<RestriccionUsuario[]>;

    abstract findOne(
        idRestriccion: number,
    ): Promise<RestriccionUsuario>;

    abstract update(
        idRestriccion: number,
        data: ActualizarRestriccionUsuario,
    ): Promise<RestriccionUsuario>;

    abstract remove(
        idRestriccion: number,
    ): Promise<RestriccionUsuario>;
}