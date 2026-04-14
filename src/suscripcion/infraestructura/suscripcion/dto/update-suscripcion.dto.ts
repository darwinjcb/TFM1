// src/suscripcion/infraestructura/suscripcion/dto/update-suscripcion.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateSuscripcionDto } from './create-suscripcion.dto';

export class UpdateSuscripcionDto extends PartialType(CreateSuscripcionDto) { }
