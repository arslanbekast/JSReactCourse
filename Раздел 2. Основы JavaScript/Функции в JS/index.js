"use strict";

// Замыкание функции - сама функция вместе со всеми внешними переменными, 
// которые ей доступны



let num = 30;

// FUNCTION DECLARATION - доступны и до объявления функции
function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}
showFirstMessage('Hello World');
console.log(num);

function calc1(a, b) {
    return (a + b);
}
console.log(calc1(5, 6));



function ret() {
    let num = 50;
    // 

    return num;
}
const anotherNum = ret();
console.log(anotherNum);

// FUNCTION EXPRESSION - доступны только после объявления
const logger = function() {
    console.log("Hello");
};
logger();

// СТРЕЛОЧНЫЕ ФУНКЦИИ - не имеют своего контекста (this)
const calc = (a, b) => { return a + b; };
console.log(calc(4,7)); 

const calc2 = (a, b) => a + b;
console.log(calc2(4,4));  

const calc3 = (a, b) => {
    console.log(a + b);
    return a + b;
};
console.log(calc3(4,4));  


const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done');
}

test();

// Любая функция возвращает undefined, даже если не используется return
function doNothing() {}
console.log(doNothing());

// Задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Андрей'));

function returnNeighboringNumbers(num) {
    return [num-1,num,num+1];
}
console.log(returnNeighboringNumbers(10)); 

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log( getMathResult(10, 5) ); 