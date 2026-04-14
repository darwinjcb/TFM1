// src/usuario/infraestructura/create-usuario.dto.ts:
export class CreateUsuarioDto {
    nombre: string;
    edad: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero: 'MASCULINO' | 'FEMENINO';
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
}