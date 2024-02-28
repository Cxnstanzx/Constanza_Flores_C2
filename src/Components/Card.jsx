import React from 'react';

function Card({ data }) {
  return (
    <div className='card'>
      <h2>Tu musica favorita es:</h2>
      <p>Nombre : {data.input1}</p>
      <p>Cantante: {data.input2}</p>
    </div>
  );
}

export default Card;
