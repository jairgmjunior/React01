import React, {Component} from 'react'

export default class Contador extends Component{

    state = {
        numero : 0
    }

    maisUm = () => {
        this.alteraNumero(+1)
    }

    menosUm = () => {
        this.alteraNumero(-1)
    }

    alteraNumero = diferenca =>{
        this.setState({ numero: this.state.numero + diferenca})
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>+</button>
                <button onClick={this.menosUm}>-</button>
            </div>
        )
    }

    
}

// Solução 01
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02
// <button onClick="{() => this.maisUm()}">+</button>