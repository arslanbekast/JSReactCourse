"use strict";

// Оператор &&(AND) всегда возвращает первое ложное значение, если оно есть.
// Если все аргументы верны, то возвращается значение последнего аргумента

// В JS 5 сущностей, которые всегда false: 
// 0
// Пустая строка
// null
// undefined
// NaN (not a number)

// Все остальное true

// Оператор  && (AND)
// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log( (hamburger && fries) );

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log( (hamburger === 3 && cola && fries) );

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'string');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

// Оператор  || (OR)
const hamburger = 0;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log( johnReport || alexReport || samReport || mariaReport );

console.log(!0);





