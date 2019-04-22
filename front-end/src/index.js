import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index2.css';
import App from './Components/App/App';
import * as serviceWorker from './Configuration/serviceWorker';

ReactDOM.render(<App className="bg-blue-darkest"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
