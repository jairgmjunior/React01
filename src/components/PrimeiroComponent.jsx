import React from 'react'

let isLegal = false;

export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h1>{props.elevado}</h1>
        <h1>{5*5}</h1>
        <h1>legal? {isLegal ? 'Sim' : 'Não'}</h1>
        <h1>{Math.random(5,6)}</h1>
    </div>
)

// export default () => (
//     <div>
//         <h1>Primeiro Componente (arrow)</h1>
//     </div>
// )

/*
function primeiro(){
    return <h1>Primeiro Componente!</h1>
}

export default primeiro;


*/