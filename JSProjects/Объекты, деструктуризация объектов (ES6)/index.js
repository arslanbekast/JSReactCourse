"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};
options.makeTest();

// Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);
console.log(bg);

console.log(options.name);

// Удалить свойство объекта
delete options.name;
console.log(options);

// Перебор объекта
for (let key in options) {

    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]})`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }  
}

console.log(Object.keys(options).length);


