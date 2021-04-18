import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import ListaObjetivos from "./components/ListaObjetivos/ListaObjetivos";
import NovoObjetivo from "./components/NovoObjetivo/NovoObjetivo";

import Usuarios from "./usuarios/pages/Usuarios";

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
    //setListaObjetivos(listaObjetivos.concat(novoObjetivo));
    setListaObjetivos((anteriorListaObjetivos) => {
      return anteriorListaObjetivos.concat(novoObjetivo);
    });
  }

  return (
    <Router>
      <Route path="/">
        Rota principal sem nada no PATH
      </Route>
      <Route path="/usuarios">
        <Usuarios />
      </Route>
      <Route path="/objetivos">
        <div className="objetivos-do-curso">
          <h2>Objetivos do Curso</h2>
          <NovoObjetivo adicionarObjetivo={adicionarNovoObjetivoHandler} />
          <ListaObjetivos objetivos={listaObjetivos} />
        </div>
      </Route>
      <Redirect to="/">
        
      </Redirect>
    </Router>
  );
}

export default App;
