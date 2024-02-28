import './App.css'
import React, { useState } from 'react';
import Formulario from './Components/Formulario';
import Card from './Components/Card';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className='contenedorPadre'>
      <h1>¿Cual es tu musica favorita?</h1>
      <Formulario onSubmit={handleSubmit} />
      {formData && <Card data={formData} />}
    </div>
  );
}

export default App;
