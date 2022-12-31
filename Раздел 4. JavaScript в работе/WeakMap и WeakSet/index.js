"use strict";

// WeakMap и WeakSet
// Объект WeakMap — коллекция пар ключ-значение. 
// В качестве ключей могут быть использованы только объекты, а значения могут быть произвольных типов.

// Объект WeakSet - коллекция, элементами которой могут быть только объекты. 
// Ссылки на эти объекты в WeakSet являются слабыми. 
// Каждый объект может быть добавлен в WeakSet только один раз.

// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));


let cache = new WeakMap();
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


// WeakSet
// add, has, delete


let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);
messages.shift();
console.log(readMessages.has(messages[0]));


