"use strict";

// Тип данных Symbol
let id = Symbol("id");
const obj = {
    name: 'Test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};


let id2 = Symbol("id");

console.log(id == id2);

// obj[id] = 1;
// console.log(obj.getId());

// for (let value in obj) console.log(value);
console.log(obj[ Object.getOwnPropertySymbols(obj)[0] ] );

const myAwesomeDB = {
    movies: [],
    actors: [],
    // [Symbol("id")]: 123
    [Symbol.for("id")]: 123
};

myAwesomeDB.id = '232342342345';
// myAwesomeDB[Symbol.for('id')] = '223';
console.log( myAwesomeDB[Symbol.for('id')] );
console.log( myAwesomeDB );