import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Assets/css/bootstrap.css'
// import './Assets/css/bootstrap.min.css'
import './Assets/css/fontawesome.css'
import './Assets/css/animate.min.css'
import './Assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
