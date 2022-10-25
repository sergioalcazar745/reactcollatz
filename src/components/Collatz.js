import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        lista: []
    }

    mostrarLista = () => {
        var resultado = parseInt(this.props.numero);
        var aux = []

        while (true) {
            if (resultado % 2 == 0) {
                resultado = resultado / 2;
                if (resultado == 1) {
                    aux.push(resultado);
                    break;
                } else {
                    aux.push(resultado);
                }
            } else {
                resultado = (resultado * 3) + 1;
                aux.push(resultado);
            }
        }
        
        this.setState({
            lista: aux
        })
    }

    componentDidMount = () =>{
        this.mostrarLista();
    }

    render() {
        return (
            <div className='container my-5'>
                <h1>Conjetura de Collatz</h1>
                <ul>
                    {   
                        this.state.lista.length > 0 &&
                        this.state.lista.map((numero, index) => {
                            return (<li key={index}>{numero}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
