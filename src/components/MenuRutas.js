import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MenuRutas extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/collatz/5" className="nav-link">Collatz</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/asdfdsfsd" className="nav-link">NotFound</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }
}
