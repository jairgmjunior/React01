import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponent'
import {CompA, CompB as ComponentB} from './components/MultiplesComponents'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <CompA valor="Componente A" />
        <ComponentB valor="Componente B" />
    </div>
    
    , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <PrimeiroComponente valor="Bom dia" elevado={Math.pow(2,8)}/>
//     </div>
    
//     , elemento)