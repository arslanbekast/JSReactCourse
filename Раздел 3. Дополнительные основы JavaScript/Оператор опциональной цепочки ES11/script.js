'use strict';
// ?. - оператор опциональной точки. Проверяет выражение слева от себя 
// и останавливает операции, если оно имеет значение undefined или null,
// результатом возвращает undefined

const box = document.querySelector('.box');
const block = document.querySelector('.block'); // Такого элемента нет на странице

console.log(block);
// if (block) {
//     console.log(block.textContent);
// }
console.log(block?.textContent); // Оператор ?. проверяет существует ли block. Если не существует возвращает undefined
console.log(1+2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};
userData.say();
userData.hey?.(); // Благодаря оператору ?. не возникнет ошибка, хоть и нет метода hey()
if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}
console.log(userData.skills?.js); // Оператор ?. заменяет предыдущее условие. ОЧень удобно