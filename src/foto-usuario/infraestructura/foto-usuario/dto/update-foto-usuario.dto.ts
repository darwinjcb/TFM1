// src/foto-usuario/infraestructura/foto-usuario/dto/update-foto-usuario.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateFotoUsuarioDto } from './create-foto-usuario.dto';

export class UpdateFotoUsuarioDto extends PartialType(CreateFotoUsuarioDto) { }
