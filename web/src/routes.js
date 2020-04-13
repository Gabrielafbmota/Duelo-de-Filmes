import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import Cadastro from './pages/Cadastro/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" title="Home">
                    <Home />
                </Route>
                <Route path="/cadastro" title="Cadastro">
                    <Cadastro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}