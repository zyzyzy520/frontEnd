import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '@/store'
import {customHistory} from './utils/history'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router history={customHistory}>
    <Provider store = {store}>
      <App />
    </Provider>
  </Router>
);

