import React, { useState } from "react";

const NovoObjetivo = (props) => {
  const [textoDigitado, setTextoDigitado] = useState('');

  function adicionarObjetivoHandler(event) {
    event.preventDefault();

    const novoObjetivo = {
      id: Math.random().toString(),
      texto: textoDigitado,
    };

    setTextoDigitado('');

    props.adicionarObjetivo(novoObjetivo);
  }

  const textoAlteradoHandler = (event) => {
    setTextoDigitado(event.target.value)
  };

  return (
    <form className="novo-objetivo" onSubmit={adicionarObjetivoHandler}>
      <input
        type="text"
        value={textoDigitado}
        onChange={textoAlteradoHandler}
      />
      <button type="submit">Adicionar Objetivo</button>
    </form>
  );
};

export default NovoObjetivo;
