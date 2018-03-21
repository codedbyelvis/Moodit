import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import store from './store';
import {Provider} from 'react-redux';


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
