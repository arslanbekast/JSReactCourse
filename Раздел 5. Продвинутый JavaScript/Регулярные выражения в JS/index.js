"use strict";

// Регулярные выражения в JS:

// new RegExp('pattern', 'flags'); // Таким способом создания регулярного выражения почти никто не пользуется.
// /pattern/f - обычно регулярные выражения создаются так.

// Флаги регулярных выражений:
// i - для поиска без учета регистра
// g - для поиска нескольких вхождений 
// m - включает многострочный режим

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Введите ваш пароль');

// console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));


// const ans = prompt('Введите число');
// const reg = /\d/g;
// console.log(ans.match(reg));


const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));



