import React from 'react';

import ShoppingList from '../components/ShoppingList';
import Navbar from '../components/Navbar';
// import '../bootstrap.main.css';

function Main() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>This is main</h1>
                <h1>{new Date().toLocaleTimeString()}</h1>
                <ShoppingList name="This is props" buttonTitle="The Button"/>
            </div>
        </div>
    );
}

export default Main;