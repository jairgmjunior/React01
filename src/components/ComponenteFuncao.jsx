import React from 'react'

export default props => {
    const aprovados = ['Paula', 'Maria', 'Joana', 'Julia']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}