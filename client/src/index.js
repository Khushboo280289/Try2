import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  
    <BrowserRouter>
   {/*//<React.StrictMode>  */}
      <App />
   {/* //</React.StrictMode> */} 
    </BrowserRouter>
  ,
  document.getElementById('root')
);



