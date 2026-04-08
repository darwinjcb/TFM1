// src/usuario/dto/create-usuario.dto.ts:
import { Genero } from '../../../generated/prisma/client';

export class CreateUsuarioDto {
    nombre: string;
    edad: number;
    biografia?: string;
    peso?: number;
    altura?: number;
    nacionalidad?: string;
    genero: Genero;
    ciudad?: string;
    pais?: string;
    numero?: string;
    correo: string;
    signoZodiacal?: string;
    queBusca?: string;
    ubicacion?: string;
    hobbie?: string;
    profesion?: string;
    fotos?: string[];
    estaActivo?: boolean;
}