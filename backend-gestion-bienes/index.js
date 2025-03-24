const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🎉 API de Gestión de Bienes está en funcionamiento');
});

// Ruta: listar bienes
app.get('/bienes', async (req, res) => {
  try {
    const bienes = await prisma.bien.findMany({
      include: {
        entidad: true,
        categoria: true,
        movimientos: true
      }
    });
    res.json(bienes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener bienes' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
