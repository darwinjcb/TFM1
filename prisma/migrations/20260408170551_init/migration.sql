-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "TipoSuscripcion" AS ENUM ('BRONCE', 'GOLD', 'PREMIUM', 'PLATINO');

-- CreateEnum
CREATE TYPE "TipoInteraccion" AS ENUM ('LIKE', 'NOLIKE', 'SUPERLIKE');

-- CreateEnum
CREATE TYPE "MotivoReporte" AS ENUM ('SPAM', 'CONTENIDO_INAPROPIADO', 'ACOSO', 'PERFIL_FALSO', 'OTRO');

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
    "fotos" TEXT[],
    "estaActivo" BOOLEAN NOT NULL DEFAULT true,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "PlanSuscripcion" (
    "idPlanSuscripcion" SERIAL NOT NULL,
    "tipo" "TipoSuscripcion" NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "beneficios" TEXT[],
    "restricciones" TEXT[],
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
    "artista" TEXT NOT NULL,
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
    "tipo" "TipoInteraccion" NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interaccion_pkey" PRIMARY KEY ("idInteraccion")
);

-- CreateTable
CREATE TABLE "Match" (
    "idMatch" SERIAL NOT NULL,
    "idUsuario1" INTEGER NOT NULL,
    "idUsuario2" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("idMatch")
);

-- CreateTable
CREATE TABLE "Chat" (
    "idChat" SERIAL NOT NULL,
    "idMatch" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("idChat")
);

-- CreateTable
CREATE TABLE "Mensaje" (
    "idMensaje" SERIAL NOT NULL,
    "idChat" INTEGER NOT NULL,
    "idUsuarioEmisor" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mensaje_pkey" PRIMARY KEY ("idMensaje")
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
CREATE TABLE "Reporte" (
    "idReporte" SERIAL NOT NULL,
    "idUsuarioReportador" INTEGER NOT NULL,
    "idUsuarioReportado" INTEGER NOT NULL,
    "motivo" "MotivoReporte" NOT NULL,
    "descripcion" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reporte_pkey" PRIMARY KEY ("idReporte")
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
CREATE UNIQUE INDEX "Match_idUsuario1_idUsuario2_key" ON "Match"("idUsuario1", "idUsuario2");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_idMatch_key" ON "Chat"("idMatch");

-- CreateIndex
CREATE UNIQUE INDEX "Bloqueo_idUsuarioBloqueador_idUsuarioBloqueado_key" ON "Bloqueo"("idUsuarioBloqueador", "idUsuarioBloqueado");

-- AddForeignKey
ALTER TABLE "SuscripcionUsuario" ADD CONSTRAINT "SuscripcionUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuscripcionUsuario" ADD CONSTRAINT "SuscripcionUsuario_idPlanSuscripcion_fkey" FOREIGN KEY ("idPlanSuscripcion") REFERENCES "PlanSuscripcion"("idPlanSuscripcion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicaUsuario" ADD CONSTRAINT "MusicaUsuario_idMusica_fkey" FOREIGN KEY ("idMusica") REFERENCES "Musica"("idMusica") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaccion" ADD CONSTRAINT "Interaccion_idUsuarioEmisor_fkey" FOREIGN KEY ("idUsuarioEmisor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interaccion" ADD CONSTRAINT "Interaccion_idUsuarioReceptor_fkey" FOREIGN KEY ("idUsuarioReceptor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_idUsuario1_fkey" FOREIGN KEY ("idUsuario1") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_idUsuario2_fkey" FOREIGN KEY ("idUsuario2") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_idMatch_fkey" FOREIGN KEY ("idMatch") REFERENCES "Match"("idMatch") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat"("idChat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensaje" ADD CONSTRAINT "Mensaje_idUsuarioEmisor_fkey" FOREIGN KEY ("idUsuarioEmisor") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloqueo" ADD CONSTRAINT "Bloqueo_idUsuarioBloqueador_fkey" FOREIGN KEY ("idUsuarioBloqueador") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloqueo" ADD CONSTRAINT "Bloqueo_idUsuarioBloqueado_fkey" FOREIGN KEY ("idUsuarioBloqueado") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idUsuarioReportador_fkey" FOREIGN KEY ("idUsuarioReportador") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reporte" ADD CONSTRAINT "Reporte_idUsuarioReportado_fkey" FOREIGN KEY ("idUsuarioReportado") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;
