// src/usuarios/infraestructura/usuarios.controller.ts:
import { Controller } from '@nestjs/common';
import { UsuariosService } from '../aplicacion/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }
}