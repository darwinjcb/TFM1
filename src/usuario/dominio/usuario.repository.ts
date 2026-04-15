// src/usuario/dominio/usuario.repository.ts:
import { ActualizarUsuario, CrearUsuario, Usuario } from './usuario';

export abstract class UsuarioRepository {
    abstract create(data: CrearUsuario): Promise<Usuario>;
    abstract findAll(): Promise<Usuario[]>;
    abstract findOne(idUsuario: number): Promise<Usuario>;
    abstract update(idUsuario: number, data: ActualizarUsuario): Promise<Usuario>;
    abstract remove(idUsuario: number): Promise<Usuario>;
}