"use strict";

// Макро и микрозадачи в JS

// Макрозадача
setTimeout(() => console.log('timeout')); // Выполнится четвертым

// Микрозадача.
// Микрозадачи - это те задачи, которые формируются внутри then(), catch() и finally() либо при помощи оператора await
// Когда выполняется одна макрозадача, после этого выполняются все накопленные микрозадачи
Promise.resolve()
    .then(() => console.log('promise')); // Выполнится вторым

queueMicrotask(() => console.log('wow')); // Выполняем микрозадачу вручную

Promise.resolve()
    .then(() => console.log('promise')); // Выполнится третим

// Макрозадача
console.log('code'); // Выполнится первым

// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}

