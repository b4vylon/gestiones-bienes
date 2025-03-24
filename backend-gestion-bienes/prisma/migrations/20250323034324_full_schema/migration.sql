-- CreateTable
CREATE TABLE "entidades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "distrito" TEXT,
    "corregimiento" TEXT,

    CONSTRAINT "entidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contraseña_hash" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "entidad_id" INTEGER NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bienes" (
    "id" SERIAL NOT NULL,
    "codigo_interno" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_adquisicion" TIMESTAMP(3),
    "valor" DOUBLE PRECISION,
    "estado" TEXT NOT NULL,
    "ubicacion_actual" TEXT,
    "responsable_actual" TEXT,
    "entidad_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bienes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial_movimientos" (
    "id" SERIAL NOT NULL,
    "bien_id" INTEGER NOT NULL,
    "tipo_movimiento" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_movimiento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "realizado_por" INTEGER NOT NULL,

    CONSTRAINT "historial_movimientos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "bienes_codigo_interno_key" ON "bienes"("codigo_interno");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_entidad_id_fkey" FOREIGN KEY ("entidad_id") REFERENCES "entidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bienes" ADD CONSTRAINT "bienes_entidad_id_fkey" FOREIGN KEY ("entidad_id") REFERENCES "entidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bienes" ADD CONSTRAINT "bienes_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias_bienes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_movimientos" ADD CONSTRAINT "historial_movimientos_bien_id_fkey" FOREIGN KEY ("bien_id") REFERENCES "bienes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_movimientos" ADD CONSTRAINT "historial_movimientos_realizado_por_fkey" FOREIGN KEY ("realizado_por") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
