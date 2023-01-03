"use strict";

// Контекст вызова. This

// В JavaScript this — это текущий контекст исполнения функции. Поскольку функцию можно вызвать четырьмя способами:

// вызов функции: alert('Hello World!'),
// вызов метода: console.log('Hello World!'),
// вызов конструктора: new RegExp('\\d'),
// непрямой вызов: alert.call(undefined, 'Hello World!'),
// и каждый из них определяет свой контекст


// 1) Обычная функция: this = window, но если "use strict" - undefined
//    Даже если функция будет объвлена внутри другой функции
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

// showThis(4,5);


// 2) Контекст у методов объекта - сам объект. 
//    Но если функцию объявить внутри метода объекта, то для этой функции
//    this = window, если включен "use strict" - undefined
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shut() {
            console.log(this);
        }
        shut();
    }
};
// obj.sum();


// 3) this в конструкторах и классах - это новый экземпляр объекта.
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
const ivan = new User('Ivan', 28);


// Ручная привязка this: call, apply, bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};
sayName.call(user, 'Smith'); // Запуск функции sayName в контексте объекта user. Второй параметр это аргумент к функции sayName
sayName.apply(user, ['Smith']); // Запуск функции sayName в контексте объекта user. Второй параметр это аргумент к функции sayName

function count(num) {
    return this*num;
}
const double = count.bind(2); // Создание новой функции double на основе функции count с контекстом 2
console.log(double(3));
console.log(double(13));



const btn = document.querySelector('button');
// Контекстом вызова this будет сам элемент,
// если функция НЕ стрелочная, т.к. у стр-ных функций нет контекста this
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});


const obj2 = {
    num: 5,
    sayNumber: function() {
        // У стрелочных функций нет контекста this.
        // Контекстом для этой функции будет контекст родителя, т.е. sayNumber
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj2.sayNumber();

// Если у стрелочной функции 1 аргумент, то скобки можно убрать.
// Если тело стрелочной функции помещается в одной строке, то фигурные скобки и return можно убрать
const double2 = a => a * 2;
console.log(double2(4));


