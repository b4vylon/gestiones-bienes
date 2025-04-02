// src/components/BienCard.jsx
import React from 'react';

export default function BienCard({ bien }) {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h3>{bien.descripcion}</h3>
      <p><strong>Código:</strong> {bien.codigo_interno}</p>
      <p><strong>Ubicación:</strong> {bien.ubicacion_actual}</p>
      <p><strong>Responsable:</strong> {bien.responsable_actual}</p>
    </div>
  );
}
