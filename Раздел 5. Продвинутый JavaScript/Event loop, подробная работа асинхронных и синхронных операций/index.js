"use strict";

// Event loop, подробная работа асинхронных и синхронных операций

// console.log(1);

// setTimeout(() => console.log('timeout'), 4000);
// setTimeout(() => console.log('timeout_4000'), 4000);

// console.log(2);

// let k = 0;

// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;    
//     }
//     alert('done');
// }
// count();


// Спрашивают на собеседованиях.
// Даже если в задержку setTimeout поставить 0, задержка будет в 4 милисекунды
// Синхронный код выполняется первым чем ассинхронный.
setTimeout(() => console.log(1), 0);

console.log(2);