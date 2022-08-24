import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { options } from './Utils/ReactAlert';
 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
 

);
reportWebVitals();
