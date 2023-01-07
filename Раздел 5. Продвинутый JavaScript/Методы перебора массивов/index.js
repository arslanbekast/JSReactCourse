"use strict";

//  Методы перебора массивов в JS:
// 1) filter - Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// 2) map - Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// 3) reduce - Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// 4) every - возвращают true, если все элементы соответствуют условию, иначе false
// 5) some - возвращают true, если хотябы один элемент соответствует условию, иначе false

// 1) filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames);

// 2) map 
let answers = ['IvAn', 'AnnA', 'Hello'];
answers = answers.map(item => item.toLowerCase());
console.log(answers);

// 3) reduce
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);


// every/some
const some = [4, 'qwq', 'sdsdfsdf'];
console.log(some.some(item => typeof(item) === 'number'));

const every = [4, 11, 6];
console.log(every.every(item => typeof(item) === 'number'));


// Пример

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);
