import React from 'react'

const CompA = props =>(
    <h1>Primeiro Componente diz: {props.valor}</h1>
)

const CompB = props =>(
    <h1>Segundo Componente diz: {props.valor}</h1>
)

export {CompA, CompB}