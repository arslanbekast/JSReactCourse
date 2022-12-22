'use strict';
// ?? - оператор нулевого слияния Nullish. Проверяет значения на Null и undefined.
const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200)
}

changeParams(box, newHeight, newWidth);

let userName;
console.log(userName ?? 'User'); // Если userName будет undefined, то выведится строка 'User'

let userKey;
console.log(userName ?? userKey ?? 'User');
