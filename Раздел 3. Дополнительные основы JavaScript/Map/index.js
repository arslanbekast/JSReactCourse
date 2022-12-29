"use strict";

// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
// У обычного Object ключами могут быть только строки и Symbol


// Методы и свойства:

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.
// map.keys() - возвращает итерируемый объект с ключами Map
// map.values() - возвращает итерируемый объект со значениями Map 

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];
const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

console.log(map);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
console.log(map.size);

// Перебор Map по ключам
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);

// Перебор Map по значениям
for (let price of map.values()) {
    console.log(price);
}

// Третий способ перебора Map
for (let [shop, price] of map.entries()) {
    console.log(shop, price);
}

// Четвертый способ перебора Map
map.forEach((value, key, map) => {
    console.log(key,value);
});


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Переводим обычный объект в формат Map
const userMap = new Map(Object.entries(user));
console.log(userMap);

// Переводим Map в обычный объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);