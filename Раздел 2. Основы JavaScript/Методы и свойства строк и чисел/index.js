"use strict";

const str = "teSt";
const arr = [1,2,3];

// Свойство length - кол-во символов строки или кол-во элементов массива
console.log(str.length);
console.log(arr.length);

console.log(str[2]);

// Перевод строки в ВЕРХНИЙ регистр
console.log(str.toUpperCase());
// Перевод строки в нижний регистр
console.log(str.toLowerCase());


const fruit = "Some fruit";
// Поиск позиции подстроки в строке
console.log(fruit.indexOf("q"));
// Поиск подстроки в строке
console.log(fruit.slice(5,10));
console.log(fruit.slice(5));
console.log(fruit.slice(-5,-1));
console.log(fruit.substring(5, 10));
console.log(fruit.substr(5, 5)); //Второй параметр - кол-во сиволов

const num = 12.2;
// Округление
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));