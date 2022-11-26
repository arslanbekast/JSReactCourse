"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 0; i < 8; i++) {
    
    if (i === 6) {
        continue;
    }
    console.log(i);
}

// Цикл в цикле и метки

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
    
}

let result = '';
const len = 10;

for (let i = 1; i < len; i++) {
    
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
    
}

console.log(result);

// Метки
first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            // if (k === 2) continue first;
            if (k === 2) break first;
            console.log(`Third level ${k}`);           
        }
    }   
}

// Задачи

for (let i=5; i<=10; i++) {
    console.log(i);
}


for (let i=20; i>=10; i--) {
    if (i === 13) break;
    console.log(i);
    
}

for (let i=2; i<=10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }  
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;
while (i <= 16) {
    
    if (i % 2 === 0) {
        i++;
        continue;
        
    } else {
        console.log(i);
    }
    i++;
}

const arrayOfNumbers = [];

    for (let i=5; i<=10; i++) {
        arrayOfNumbers[i-5] = i;
    }
    
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
