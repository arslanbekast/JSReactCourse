"use strict";

// Примитивнные типы данных передаются по значение
let a = 5,
    b = a;

b = b+5;
console.log(b);
console.log(a);

// Объекты, массивы, функции и т.д. передаются по ссылке,
// т.е. при простом присваивании объекта дпругой переменной
// присваивается сслыке к основному объекту, и при изменении объекта-копии 
// меняется и сам основной объект
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передается ссылка на бъект obj
copy.a = 10;
console.log(obj);
console.log(copy);

// Функция для копирования объекта
// Поверхностная копия
function copyFunc(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};
// Object.assign - функция соединения двух объектов
console.log(Object.assign(numbers, add));

// Еще 1 способ копирования объекта, присоединяя к объекту пустой объект
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
// Массив передается по ссылке, при изменении newArray будет меняться и oldArray
const newArray = oldArray;
newArray[0] = 'e';
console.log(oldArray);
console.log(newArray);

// Копирвоание массива по значению
const oldArray2 = ['a', 'b', 'c'];
const newArray2 = oldArray2.slice();
newArray2[0] = 'e';
console.log(oldArray2);
console.log(newArray2);

// Spread (...) оператор разворачивает элементы массива или объекта. Появился в EcmaScript 9

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      // Разворачиваем элементы массивов video и blogs внутри массива internet,
      // и внтури массива Internet будут элементы массивов video и blogs
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

// Разворачиваем элементы массива внутрь аргументов функции,
// с помощью Spread оператора (...)
log(...num);

const array = ['a', 'b'];
// Создаем копию массива с помощью spread оператора (...)
const newArray3 = [...array];
console.log(newArray3);

const q = {
    one: 1,
    two: 2
};
// Создаем копию объекта с помощью spread оператора (...)
const newObj = {...q};

