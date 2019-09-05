import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponent'
// import {CompA, CompB as ComponentB} from './components/MultiplesComponents'
//import MultElements from './components/MultiplesElements'
//import Familia from './components/FamiliaSilva'
//import Familia from './components/Familia'
//import Membro from './components/Member'
//import ComponenteCFuncao from './components/ComponenteFuncao'
//import Pai from './components/Pai'
//import ComponenteClasse from './components/ComponenteClasse'
import Contador from './components/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Contador numero={0}/>
    </div>    
    , elemento)

//     const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <ComponenteClasse impressao="" />
//     </div>    
//     , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Pai />
//     </div>    
//     , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//       <ComponenteCFuncao />
//     </div>    
//     , elemento)


// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia sobrenome="Pereira">
//             <Membro nome="José" />
//             <Membro nome="Maria" />
//         </Familia>
//     </div>    
//     , elemento)

//     const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia>
//             <Membro nome="José" sobrenome="Antonio"/>
//             <Membro nome="João" sobrenome="Antonio"/>
//         </Familia>
//         <Familia>
//             <Membro nome="Maria" sobrenome="Raimunda"/>
//             <Membro nome="Daniela" sobrenome="Maria"/>
//         </Familia>
//     </div>    
//     , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <Familia/>
//     </div>    
//     , elemento)

    // const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//        <MultElements />
//     </div>
    
//     , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <CompA valor="Componente A" />
//         <ComponentB valor="Componente B" />
//     </div>
    
//     , elemento)

// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <div>
//         <PrimeiroComponente valor="Bom dia" elevado={Math.pow(2,8)}/>
//     </div>
    
//     , elemento)