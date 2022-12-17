"use strict";

// Динамическая типизация - возможность 1 типа данных превращаться в другой.

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) При сложении со строкой всегда получается строка
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + 5);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number(4)));

// 2) Унарный плюс переводит строку в число
console.log(typeof(+'4'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("Hello","");


// To boolean

// Всегда false: 0, '', null, undefined, NaN

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}


// 2)

console.log(typeof(Boolean(4)));

// 3)

console.log(typeof(!!"3333"));





