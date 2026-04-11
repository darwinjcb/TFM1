// src/usuario/dominio/usuario.ts:
export class Usuario {
    constructor(
        public readonly idUsuario: number,
        public readonly nombre: string,
        public readonly edad: number,
        public readonly biografia: string | null,
        public readonly peso: number | null,
        public readonly altura: number | null,
        public readonly nacionalidad: string | null,
        public readonly genero: string,
        public readonly ciudad: string | null,
        public readonly pais: string | null,
        public readonly numero: string | null,
        public readonly correo: string,
        public readonly signoZodiacal: string | null,
        public readonly queBusca: string | null,
        public readonly ubicacion: string | null,
        public readonly hobbie: string | null,
        public readonly profesion: string | null,
        public readonly fotos: string[],
        public readonly estaActivo: boolean,
        public readonly fechaCreacion: Date,
        public readonly fechaActualizacion: Date,
    ) { }
}