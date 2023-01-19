"use strict";

// Прием модуль, как и зачем его использовать

const app = '123';

const number = 1;

// Моудль со своей областью видимости переменных
(function(){
    let number = 3;
    console.log(number);
    console.log(number + 2);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };
    return {
        sayHello: privat
    };
}());

user.sayHello();

