from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# ✅ CORS para permitir conexión desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Cambia esto si usas otro origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Modelo de datos para un bien
class Bien(BaseModel):
    codigo: str
    descripcion: str
    fecha_ingreso: str
    valor: float
    departamento: str
    responsable: str
    estado: str

# Lista temporal en memoria (simulación de BD)
bienes: List[Bien] = []

# 🔹 Ruta raíz
@app.get("/")
def read_root():
    return {"message": "Bienvenido a la App de Gestión de Bienes"}

# 🔹 GET: Listar bienes
@app.get("/bienes", response_model=List[Bien])
def listar_bienes():
    return bienes

# 🔹 POST: Agregar un bien
@app.post("/bienes", response_model=Bien)
def crear_bien(bien: Bien):
    bienes.append(bien)
    return bien

