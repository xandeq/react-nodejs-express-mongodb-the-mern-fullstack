import React, { useState } from "react";

import "./App.css";
import ListaObjetivos from "./components/ListaObjetivos/ListaObjetivos";
import NovoObjetivo from "./components/NovoObjetivo/NovoObjetivo";

function App() {
  const [listaObjetivos, setListaObjetivos] = useState([
    {
      id: "cg1",
      texto: "Finalizar o curso",
    },
    {
      id: "cg2",
      texto: "Aprender tudo sobre o tema principal",
    },
    {
      id: "cg3",
      texto: "Ajudar os outros estudantes do curso",
    },
  ]);

  function adicionarNovoObjetivoHandler(novoObjetivo) {
    setListaObjetivos(listaObjetivos.concat(novoObjetivo));
    listaObjetivos.push(novoObjetivo);
    console.log(listaObjetivos);
  }

  return (
    <div className="objetivos-do-curso">
      <h2>Course Goals</h2>
      <NovoObjetivo adicionarObjetivo={adicionarNovoObjetivoHandler} />
      <ListaObjetivos objetivos={listaObjetivos} />
    </div>
  );
}

export default App;
