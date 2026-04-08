// src/plan-suscripcion/dto/create-plan-suscripcion.dto.ts:
import { TipoSuscripcion } from '../../../generated/prisma/client';

export class CreatePlanSuscripcionDto {
    tipo: TipoSuscripcion;
    valor: number;
    beneficios: string[];
    restricciones: string[];
}