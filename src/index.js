import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import Main2 from './main/Main2';

ReactDOM.render(
  <Main2 />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
