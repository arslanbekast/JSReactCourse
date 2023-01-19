"use strict";

// Геттеры и сеттеры (свойства объектов)

// Свйоства объектов делятся на 2 типа: свойства данные и свойства акцессоры

const person = {
    name: 'Alex',
    age: 26,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }


};

console.log(person.userAge = 30); // userAge - свйоство акцессор
console.log(person.userAge); // userAge - свйоство акцессор