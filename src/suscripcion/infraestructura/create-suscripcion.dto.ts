// src/suscripcion/infraestructura/create-suscripcion.dto.ts:
export class CreateSuscripcionDto {
    idUsuario: number;
    idPlanSuscripcion: number;
    fechaFin?: string;
    activa?: boolean;
}