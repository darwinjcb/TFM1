// src/musica-usuario/dto/update-musica-usuario.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicaUsuarioDto } from './create-musica-usuario.dto';

export class UpdateMusicaUsuarioDto extends PartialType(CreateMusicaUsuarioDto) { }
