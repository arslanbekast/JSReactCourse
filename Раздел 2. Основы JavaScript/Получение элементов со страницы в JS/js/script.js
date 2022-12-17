'use strict';

const box = document.getElementById('box'); // Получаем элемент по id
console.log(box);

const btns = document.getElementsByTagName('button'); // Получаем элемент по названию тэга

console.log(btns[1]);

const circles = document.getElementsByClassName('circle'); // Получаем элемент по названия класса элемента
console.log(circles);


// Современные методы доступа к DOM-элементам

const hearts = document.querySelectorAll('.heart'); // Получаем все элементы с классом .heart
console.log(hearts);

// Перебор элементов hearts
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // Получаем первый элемент с классом .heart
console.log(oneHeart);