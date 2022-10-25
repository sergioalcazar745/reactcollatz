import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter} from 'react-router-dom';

export default class Home extends Component {

    numero = React.createRef();

    state = {
        numero: 0
    }

    hola = (e) => {
        e.preventDefault();
        console.log(this.props.history)
    }
    render() {
        return (
            <div className='container my-5'>
                <h1>BIENVENIDO A COLLATZ</h1>
                <form onSubmit={this.hola}>
                    <input type="text" ref={this.numero}/><br/>
                    <button>Calcular</button>
                    
                    {/* {
                        this.state.numero != 0 &&
                        
                    } */}
                </form>
            </div>
        )
    }
}
