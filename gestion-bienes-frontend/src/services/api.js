// src/services/api.js
const API_BASE_URL = "http://192.168.68.55:8000"; // IP de la máquina que corre el backend

export async function fetchBienes() {
  const response = await fetch(`${API_BASE_URL}/bienes`);
  if (!response.ok) throw new Error("Error al obtener los bienes");
  return response.json();
}
