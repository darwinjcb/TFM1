// src/bloqueo/dto/update-bloqueo.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateBloqueoDto } from './create-bloqueo.dto';

export class UpdateBloqueoDto extends PartialType(CreateBloqueoDto) { }
