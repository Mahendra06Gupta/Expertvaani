import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './Components/Login/login'
import * as serviceWorker from './serviceWorker';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'react-bootstrap';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
