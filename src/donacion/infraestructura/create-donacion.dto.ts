// src/donacion/infraestructura/create-donacion.dto.ts:
import { EstadoDonacion } from '../dominio/donacion';

export class CreateDonacionDto {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    monto: number;
    mensaje?: string;
    estadoDonacion?: EstadoDonacion;
}