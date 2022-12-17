"use strict";

// let x = 5; alert( x++ );

// [ ] + false - null + true; Результат NaN
console.log([] + false); // Результат "false". 
                         // При сложении пустого массива результат будет строкой
                         // При попытке отныть от строки что-нибудь, в результате будет NaN

let y = 1; 
let x = y = 2; 
alert(x);

console.log([ ] + 1 + 2);

alert( "1"[0] ); // Будет выведена "1". Это означает следующее: выести 0 символ строки "1"

console.log(2 && 1 && null && 0 && undefined ); // Оператор И(&&) запинается на лжи(false)

console.log(!!( 1 && 2 ) === (1 && 2));

alert( null || 2 && 3 || 4 ); // В результате будет 3.
                              // Оператор ИЛИ(||) запинается на правде(true)

const a = [1, 2, 3]; 
const b = [1, 2, 3];
console.log(a==b); // false

alert( +"Infinity" ); // Результат будет infinite в типе данных Number

console.log("Ёжик" > "яблоко"); //false

console.log( 0 || "" || 2 || undefined || true || falsе  ); // Результат: 2