"use strict";

// JSON формат передачи данных, глубокое клонирование объектов

const persone = {
    name: 'Alex',
    tel: '+79999999999',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// JSON.stringify - переводит объект в JSON формат
console.log(JSON.stringify(persone)); 

// JSON.parse - переводит JSON в формат объекта
console.log(JSON.parse(JSON.stringify(persone))); 

// Клонируем (глубокое клонирование) объект с помощью методов JSON
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
