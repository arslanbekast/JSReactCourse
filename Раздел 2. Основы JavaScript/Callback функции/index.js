"use strict";

// Callback функция - функция, которая должна быть выполнена после того,
// как другая функция завершила свое выполнение.

function first() {
    setTimeout(function(){
        console.log(1);
    },500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    for (let i = 0; i < 1000000000; i++) {

    }
    callback();
}
function done() {
    console.log('Я прошел этот урок');
}
learnJS('JS', done);