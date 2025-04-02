import React, { useEffect, useState } from 'react';
import BienForm from "./pages/BienForm";
import BienesList from './pages/BienesList';
import { fetchBienes } from './services/api'; // o donde lo tengas

export default function App() {
  const [bienes, setBienes] = useState([]);

  // Obtener lista de bienes al cargar
  useEffect(() => {
    fetchBienes().then(setBienes).catch(console.error);
  }, []);

  // Función para agregar un nuevo bien desde el formulario
  const agregarBien = (nuevoBien) => {
    setBienes((prev) => [...prev, nuevoBien]);
  };

  return (
    <div>
      <BienForm onBienRegistrado={agregarBien} />
      <hr />
      <BienesList bienes={bienes} />
    </div>
  );
}
