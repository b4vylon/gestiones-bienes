import React from 'react';
import BienCard from './BienCard'; // o donde lo tengas

export default function BienesList({ bienes }) {
  return (
    <div>
      <h2>Listado de Bienes</h2>
      {bienes.length === 0 ? (
        <p>No hay bienes registrados.</p>
      ) : (
        bienes.map((bien, index) => (
          <BienCard key={index} bien={bien} />
        ))
      )}
    </div>
  );
}
