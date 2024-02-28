import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3 || /^\s/.test(input1)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    onSubmit({ input1, input2 });
    setInput1('');
    setInput2('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre: </label>
        <input type="text" value={input1} onChange={handleInput1Change} />
      </div>
      <div>
        <label>Cantante: </label>
        <input type="text" value={input2} onChange={handleInput2Change} />
      </div>
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Formulario;
