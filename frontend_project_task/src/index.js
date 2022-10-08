import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './context/context';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
      <Router>
        <Context>
          <App />
        </Context>
      </Router>
);
