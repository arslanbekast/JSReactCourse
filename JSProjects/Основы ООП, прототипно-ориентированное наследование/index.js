"use strict";

let str = 'some';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));


console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

// const john = {
//     health: 100
// };

// Устаревший формат создания прототипа
// john.__proto__ = soldier;
// console.log(john.armor);
// john.sayHello();

// Новый способ создания прототипа
// Создаем прототип объекта john на основе объекта soldier
// Object.setPrototypeOf(john, soldier);
// john.sayHello();

// Основной способ создания прототипа 
// Создаем новый объект john на основе объекта soldier
const john =Object.create(soldier);
john.sayHello();
