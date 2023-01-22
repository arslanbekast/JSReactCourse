"use strict";

// Ошибки. Конструкция try catch. Как избежать “поломки” своего кода

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     // console.log('error');
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {

// }

// console.log('Still Normal');
try {
    document.querySelector('.active').addEventListener('click', () => console.log('click'));
} catch(e) {}
