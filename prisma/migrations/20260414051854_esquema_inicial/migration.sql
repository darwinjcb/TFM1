-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "TipoSuscripcion" AS ENUM ('BRONCE', 'GOLD', 'PREMIUM', 'PLATINO');

-- CreateEnum
CREATE TYPE "TipoInteraccion" AS ENUM ('LIKE', 'NOLIKE', 'SUPERLIKE');

-- CreateEnum
CREATE TYPE "EstadoDonacion" AS ENUM ('PENDIENTE', 'COMPLETADA', 'RECHAZADA');

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "biografia" TEXT,
    "peso" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION,
    "nacionalidad" TEXT,
    "genero" "Genero" NOT NULL,
    "ciudad" TEXT,
    "pais" TEXT,
    "numero" TEXT,
    "correo" TEXT NOT NULL,
    "signoZodiacal" TEXT,
    "queBusca" TEXT,
    "ubicacion" TEXT,
    "hobbie" TEXT,
    "profesion" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "FotoUsuario" (
    "idFoto" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "urlFoto" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "FotoUsuario_pkey" PRIMARY KEY ("idFoto")
);

-- CreateTable
CREATE TABLE "PlanSuscripcion" (
    "idPlanSuscripcion" SERIAL NOT NULL,
    "tipo" "TipoSuscripcion" NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "beneficios" TEXT,
    "restricciones" TEXT,
    "mensajesIlimitados" BOOLEAN NOT NULL DEFAULT false,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanSuscripcion_pkey" PRIMARY KEY ("idPlanSuscripcion")
);

-- CreateTable
CREATE TABLE "SuscripcionUsuario" (
    "idSuscripcionUsuario" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idPlanSuscripcion" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMP(3),
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SuscripcionUsuario_pkey" PRIMARY KEY ("idSuscripcionUsuario")
);

-- CreateTable
CREATE TABLE "Musica" (
    "idMusica" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "artista" TEXT,
    "album" TEXT,
    "enlaceSpotify" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("idMusica")
);

-- CreateTable
CREATE TABLE "MusicaUsuario" (
    "idMusicaUsuario" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idMusica" INTEGER NOT NULL,

    CONSTRAINT "MusicaUsuario_pkey" PRIMARY KEY ("idMusicaUsuario")
);

-- CreateTable
CREATE TABLE "Interaccion" (
    "idInteraccion" SERIAL NOT NULL,
    "idUsuarioEmisor" INTEGER NOT NULL,
    "idUsuarioReceptor" INTEGER NOT NULL,
    "tipoInteraccion" "TipoInteraccion" NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interaccion_pkey" PRIMARY KEY ("idInteraccion")
);

-- CreateTable
CREATE TABLE "Reporte" (
    "idReporte" SERIAL NOT NULL,
    "idUsuarioReportador" INTEGER NOT NULL,
    "idUsuarioReportado" INTEGER NOT NULL,
    "descripcion" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reporte_pkey" PRIMARY KEY ("idReporte")
);

-- CreateTable
CREATE TABLE "Bloqueo" (
    "idBloqueo" SERIAL NOT NULL,
    "idUsuarioBloqueador" INTEGER NOT NULL,
    "idUsuarioBloqueado" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bloqueo_pkey" PRIMARY KEY ("idBloqueo")
);

-- CreateTable
CREATE TABLE "Match" (
    "idMatch" SERIAL NOT NULL,
    "idUsuarioUno" INTEGER NOT NULL,
    "idUsuarioDos" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("idMatch")
);

-- CreateTable
CREATE TABLE "Chat" (
    "idChat" SERIAL NOT NULL,
    "idUsuarioUno" INTEGER NOT NULL,
    "idUsuarioDos" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("idChat")
);

-- CreateTable
CREATE TABLE "Mensaje" (
    "idMensaje" SERIAL NOT NULL,
    "idChat" INTEGER NOT NULL,
    "idRemitente" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mensaje_pkey" PRIMARY KEY ("idMensaje")
);

-- CreateTable
CREATE TABLE "ConfiguracionComunicacion" (
    "idConfiguracionComunicacion" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "permiteMensajes" BOOLEAN NOT NULL DEFAULT true,
    "requiereMatchParaChatear" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ConfiguracionComunicacion_pkey" PRIMARY KEY ("idConfiguracionComunicacion")
);

-- CreateTable
CREATE TABLE "EstadoActividad" (
    "idEstadoActividad" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "estaActivo" BOOLEAN NOT NULL DEFAULT false,
    "enLive" BOOLEAN NOT NULL DEFAULT false,
    "ultimaConexion" TIMESTAMP(3),

    CONSTRAINT "EstadoActividad_pkey" PRIMARY KEY ("idEstadoActividad")
);

-- CreateTable
CREATE TABLE "Donacion" (
    "idDonacion" SERIAL NOT NULL,
    "idUsuarioEmisor" INTEGER NOT NULL,
    "idUsuarioReceptor" INTEGER NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "mensaje" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estadoDonacion" "EstadoDonacion" NOT NULL DEFAULT 'PENDIENTE',

    CONSTRAINT "Donacion_pkey" PRIMARY KEY ("idDonacion")
);

-- CreateTable
CREATE TABLE "RestriccionUsuario" (
    "idRestriccion" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RestriccionUsuario_pkey" PRIMARY KEY ("idRestriccion")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "PlanSuscripcion_tipo_key" ON "PlanSuscripcion"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "SuscripcionUsuario_idUsuario_key" ON "SuscripcionUsuario"("idUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "MusicaUsuario_idUsuario_idMusica_key" ON "MusicaUsuario"("idUsuario", "idMusica");

-- CreateIndex
CREATE UNIQUE INDEX "Interaccion_idUsuarioEmisor_idUsuarioReceptor_key" ON "Interaccion"("idUsuarioEmisor", "idUsuarioReceptor");

-- CreateIndex
CREATE UNIQUE INDEX "Bloqueo_idUsuarioBloqueador_idUsuarioBloqueado_key" ON "Bloqueo"("idUsuarioBloqueador", "idUsuarioBloqueado");

-- CreateIndex
CREATE UNIQUE INDEX "Match_idUsuarioUno_idUsuarioDos_key" ON "Match"("idUsuarioUno", "idUsuarioDos");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_idUsuarioUno_idUsuarioDos_key" ON "Chat"("idUsuarioUno", "idUsuarioDos");

-- CreateIndex
CREATE INDEX "Mensaje_idChat_idx" ON "Mensaje"("idChat");

-- CreateIndex
CREATE UNIQUE INDEX "ConfiguracionComunicacion_idUsuario_key" ON "ConfiguracionComunicacion"("idUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "EstadoActividad_idUsuario_key" ON "EstadoActividad"("idUsuario");

-- AddForeignKey
ALTER TABLE "FotoUsuario" ADD CONSTRAINT "FotoUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscripcionUsuario" ADD CONSTRAINT "SuscripcionUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscripcionUsuario" ADD CONSTRAINT "SuscripcionUsuario_idPlanSuscripcion_fkey" FOREIGN KEY ("idPlanSuscripcion") REFERENCES "PlanSuscripcion"("idPlanSuscripcion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idMusica_fkey" FOREIGN KEY ("idMusica") REFERENCES "Musica"("idMusica") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaccion" ADD CONSTRAINT "Interaccion_idUsuarioEmisor_fkey" FOREIGN KEY ("idUsuarioEmisor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaccion" ADD CONSTRAINT "Interaccion_idUsuarioReceptor_fkey" FOREIGN KEY ("idUsuarioReceptor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idUsuarioReportador_fkey" FOREIGN KEY ("idUsuarioReportador") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idUsuarioReportado_fkey" FOREIGN KEY ("idUsuarioReportado") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloqueo" ADD CONSTRAINT "Bloqueo_idUsuarioBloqueador_fkey" FOREIGN KEY ("idUsuarioBloqueador") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloqueo" ADD CONSTRAINT "Bloqueo_idUsuarioBloqueado_fkey" FOREIGN KEY ("idUsuarioBloqueado") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_idUsuarioUno_fkey" FOREIGN KEY ("idUsuarioUno") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_idUsuarioDos_fkey" FOREIGN KEY ("idUsuarioDos") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idUsuarioUno_fkey" FOREIGN KEY ("idUsuarioUno") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idUsuarioDos_fkey" FOREIGN KEY ("idUsuarioDos") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat"("idChat") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_idRemitente_fkey" FOREIGN KEY ("idRemitente") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfiguracionComunicacion" ADD CONSTRAINT "ConfiguracionComunicacion_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstadoActividad" ADD CONSTRAINT "EstadoActividad_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donacion" ADD CONSTRAINT "Donacion_idUsuarioEmisor_fkey" FOREIGN KEY ("idUsuarioEmisor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donacion" ADD CONSTRAINT "Donacion_idUsuarioReceptor_fkey" FOREIGN KEY ("idUsuarioReceptor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestriccionUsuario" ADD CONSTRAINT "RestriccionUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;
