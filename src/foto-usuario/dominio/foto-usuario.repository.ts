// src/foto-usuario/dominio/foto-usuario.repository.ts:
import { ActualizarFotoUsuario, CrearFotoUsuario, FotoUsuario, } from './foto-usuario';

export abstract class FotoUsuarioRepository {
    abstract create(data: CrearFotoUsuario): Promise<FotoUsuario>;
    abstract findAll(): Promise<FotoUsuario[]>;
    abstract findOne(idFoto: number): Promise<FotoUsuario>;
    abstract update(
        idFoto: number,
        data: ActualizarFotoUsuario,
    ): Promise<FotoUsuario>;
    abstract remove(idFoto: number): Promise<FotoUsuario>;
}