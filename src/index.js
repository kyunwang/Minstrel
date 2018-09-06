import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
