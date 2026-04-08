// src/interaccion/dto/create-interaccion.dto.ts:
import { TipoInteraccion } from '../../../generated/prisma/client';

export class CreateInteraccionDto {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    tipo: TipoInteraccion;
}