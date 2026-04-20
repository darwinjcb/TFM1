// src/estado-actividad/infraestructura/create-estado-actividad.dto.ts:
export class CreateEstadoActividadDto {
    idUsuario: number;
    estaActivo?: boolean;
    enLive?: boolean;
    ultimaConexion?: string;
}