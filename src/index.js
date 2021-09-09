import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

