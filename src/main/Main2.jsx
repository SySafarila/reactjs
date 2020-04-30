import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/Home';
import Videos from '../components/Videos';

function Main2() {
    return(
        <div>
            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/zero">
                        <h1 className="pl-2">This is zero</h1>
                    </Route>
                    <Route path="/one">
                        <h1 className="pl-2">This is one | <Link to="/" className="text-danger text-decoration-none">Back to home</Link></h1>
                    </Route>
                    <Route path="/video">
                        <Videos />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Main2;