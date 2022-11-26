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