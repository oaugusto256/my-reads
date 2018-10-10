import React from 'react';
import ReactDOM from 'react-dom';
import MyReads from './containers/MyReads';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles/animate.css";
import './styles/my-reads.css';

ReactDOM.render(
  <BrowserRouter>
    <MyReads />
  </BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
