// src/suscripcion-usuario/dto/create-suscripcion-usuario.dto.ts:
export class CreateSuscripcionUsuarioDto {
    idUsuario: number;
    idPlanSuscripcion: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    activa?: boolean;
}
