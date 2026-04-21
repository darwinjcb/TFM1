// src/donacion/infraestructura/update-donacion.dto.ts:
import { EstadoDonacion } from '../dominio/donacion';

export class UpdateDonacionDto {
    monto?: number;
    mensaje?: string;
    estadoDonacion?: EstadoDonacion;
}