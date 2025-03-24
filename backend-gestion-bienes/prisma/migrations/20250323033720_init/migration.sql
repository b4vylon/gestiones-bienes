-- CreateTable
CREATE TABLE "categorias_bienes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "categorias_bienes_pkey" PRIMARY KEY ("id")
);
