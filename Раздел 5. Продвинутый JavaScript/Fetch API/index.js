"use strict";

// Fetch API

// Получаем данные с сервера 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));


// Отправляем данные на сервер в формате JSON
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({name: 'Alex'}),
        header: {
            'Content-type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(json => console.log(json));
