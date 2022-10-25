import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MenuRutas from './components/MenuRutas';
import Home from './components/Home';
import Collatz from './components/Collatz';
import Page404 from './components/Error404';
import { useParams } from 'react-router-dom';

export default class Router extends Component {
    render() {

        function GetParamsCollatz (){
            var {numero} = useParams();
            return (<Collatz numero={numero}/>)
        }

        return (
            <BrowserRouter>
            <MenuRutas/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/collatz/:numero" element={<GetParamsCollatz/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
