import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world';
const elem = (
  <div>
    <h2 className='text'>{text}</h2>
    <label htmlFor="text">Введите что-нибудь</label>
    <input type="text" id='text'/>
    <button tabIndex={0}>Button</button>
  </div>
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

