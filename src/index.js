import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import s from '../src/component/App/App.module.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={s.app} />
  </React.StrictMode>,
  document.getElementById('root'),
);
