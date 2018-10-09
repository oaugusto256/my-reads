import React from 'react';
import ReactDOM from 'react-dom';
import MyReads from './MyReads';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/my-reads.css';

ReactDOM.render(<MyReads />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
