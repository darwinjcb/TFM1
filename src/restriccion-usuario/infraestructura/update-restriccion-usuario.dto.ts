// src/restriccion-usuario/infraestructura/update-restriccion-usuario.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateRestriccionUsuarioDto } from './create-restriccion-usuario.dto';

export class UpdateRestriccionUsuarioDto extends PartialType(CreateRestriccionUsuarioDto) { }
