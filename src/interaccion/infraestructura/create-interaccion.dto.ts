// src/interaccion/infraestructura/create-interaccion.dto.ts:
export class CreateInteraccionDto {
    idUsuarioEmisor: number;
    idUsuarioReceptor: number;
    tipoInteraccion: 'LIKE' | 'NOLIKE' | 'SUPERLIKE';
}