import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';

function Main2() {
    return(
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <h1 className="pl-2">This is home</h1>
                    </Route>
                    <Route path="/zero" exact>
                        <h1 className="pl-2">This is zero</h1>
                    </Route>
                    <Route path="/one">
                        <h1 className="pl-2">This is one</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main2;