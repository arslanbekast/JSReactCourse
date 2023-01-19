"use strict";

// Инкапсуляция в JS

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };
//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
        
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// ivan.name = 'Alex';
// console.log(ivan.getAge());

// ivan.say();


class User {

    constructor(name, age) {
        this.name = name;
        this._age = age; // Приватное свойство
    }
    
    #surname = 'Petrechenko'; // Новый способ создания приватного свойства. Пока что работает только в Google Chrome

    get surname() {
        return this.#surname;
    }

    set surname(str) {
        this.#surname = str;
    }

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
        
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
ivan._age = 30;
console.log(ivan.age);

console.log(ivan.surname);
ivan.surname = 'Astemirov';
console.log(ivan.surname);

ivan.say();
