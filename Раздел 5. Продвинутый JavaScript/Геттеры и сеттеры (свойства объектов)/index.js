"use strict";

// Геттеры и сеттеры (свойства объектов)

// Свйоства объектов делятся на 2 типа: свойства данные и свойства акцессоры

const person = {
    name: 'Alex',
    age: 26,

    get userAge() {
        return this.age;
    },

    set userAge(age) {
        this.age = age;
    }


};

console.log(person.userAge); // userAge - свйоство акцессор