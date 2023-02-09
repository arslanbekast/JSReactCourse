import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Элементы в React неизменяемые, т.е. их нельзя менять в режиме реального времени с помощью JS, как обычные элементы
// Они могут быть только пересозданы и заново помещены на экран

// React компоненты должны быть написаны с большой буквы


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

