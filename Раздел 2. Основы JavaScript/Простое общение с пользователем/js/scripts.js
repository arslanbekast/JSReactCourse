"use strict";

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// if (result) {
//     alert('ok');
// }
// else {
//     alert('No good');
// }

// const answer = +prompt('Вам есть 18?', '18');
// console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

console.log(typeof(answers));



