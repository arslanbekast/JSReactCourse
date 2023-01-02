"use strict";

// Функции-конструкторы в JS

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
ivan.exit();
alex.hello();

console.log(ivan);
console.log(alex);