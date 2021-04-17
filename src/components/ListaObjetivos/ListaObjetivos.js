import React from "react";
import "./ListaObjetivos.css";

const ListaObjetivos = (props) => {
  console.log(props.objetivos);
  return (
    <ul className="lista">
      {props.objetivos.map((objtv) => {
        return (
          <li id={objtv.id} key={objtv.id}>
            {objtv.texto}
          </li>
        );
      })}
    </ul>
  );
};

export default ListaObjetivos;
