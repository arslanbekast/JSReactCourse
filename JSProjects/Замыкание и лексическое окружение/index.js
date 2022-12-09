"use strict";

// Замыкание - это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

function createCounter() {
    let counter = 0;

    // const myFunction = function() {
    //     counter = counter + 1;debugger
    //     return counter;debugger
    // };
    // return myFunction;

    // Короткий вариант записи
    return () => ++counter;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);