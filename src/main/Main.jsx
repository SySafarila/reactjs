import React from 'react';

import ShoppingList from '../components/ShoppingList';

function Main() {
    return (
        <div>
            <h1>This is main</h1>
            <ShoppingList name="This is props" buttonTitle="The Button"/>
        </div>
    );
}

export default Main;