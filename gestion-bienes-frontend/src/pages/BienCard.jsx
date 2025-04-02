import React from 'react';

export default function BienCard({ bien }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '10px' }}>
      <h3>{bien.descripcion}</h3>
      <p><strong>Código:</strong> {bien.codigo}</p>
      <p><strong>Ubicación:</strong> {bien.departamento}</p>
      <p><strong>Responsable:</strong> {bien.responsable}</p>
      <p><strong>Fecha:</strong> {bien.fecha_ingreso}</p>
      <p><strong>Valor:</strong> ${bien.valor}</p>
      <p><strong>Estado:</strong> {bien.estado}</p>
    </div>
  );
}
