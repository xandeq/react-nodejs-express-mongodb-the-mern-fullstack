import React from 'react';

const NovoObjetivo = props => {
    function adicionarObjetivoHandler(event) {
        event.preventDefault();

        const novoObjetivo = {
            id: Math.random().toString(),
            texto: 'exemplo que sera substituido'
        }

        props.adicionarObjetivo(novoObjetivo);
    }

    return (<form className="novo-objetivo" onSubmit={adicionarObjetivoHandler}>
        <input type="text"/>
        <button type="submit">Adicionar Objetivo</button>
    </form>);
}

export default NovoObjetivo;