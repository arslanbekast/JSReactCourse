"use strict";

const btn = document.querySelector('.btn');
let timerId2,
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';

        }
    }
}
btn.addEventListener('click', myAnimation);



// btn.addEventListener('click', () => {
//     // const timerId2 = setTimeout(logger, 2000);
//     timerId2 = setInterval(logger, 2000);
// });

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');



// function logger() {
//     if (i === 3) {
//         clearInterval(timerId2);
//     }
//     console.log('text');
//     i++;
// }


// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);