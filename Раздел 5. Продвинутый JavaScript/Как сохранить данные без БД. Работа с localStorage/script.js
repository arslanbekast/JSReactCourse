'use strict';

// localStorage.setItem('number', 5); // Запись данных в localStorage

// const num = localStorage.getItem('number'); // Получение данных с localStorage
// console.log(num);

// localStorage.removeItem('number'); // Удаление данных с localStorage

// localStorage.clear(); // Очистка localStorage


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} 

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log( JSON.parse(localStorage.getItem('alex')) );