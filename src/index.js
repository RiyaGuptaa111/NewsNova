import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
// import App from './App';
// import { BrowserRouter, BrowserRouterRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App/>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
reportWebVitals();
