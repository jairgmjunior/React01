import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponent'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia" elevado={Math.pow(2,8)}/>
    </div>
    
    , elemento)