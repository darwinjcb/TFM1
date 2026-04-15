// src/interaccion/infraestructura/create-interaccion.dto.ts:
import { TipoInteraccion } from '../dominio/interaccion';

export class CreateInteraccionDto {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    tipoInteraccion: TipoInteraccion;
}