"use strict";

// Итерируемые конструкции

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Объект не перебирается с помощью for...of, так как это не итерируемый объект
// Перебор по ключю объекта.
for (let key in user) {
    console.log(user[key]);
}

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};
console.dir(arr);
// Перебор по ключю массива
for (let key in arr) {
    console.log(arr[key]);
}

// Перебор по значениню массива
for (let value of arr) {
    console.log(value);
}

const str = 'string';
for (let key in str) {
    console.log(str[key]);
}



const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
};
// Чтобы сделать объект итерируемым, нужно добавить в него метод с именем Symbol.iterator

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }


        }

    };
};
const iterator = salaries[Symbol.iterator]();
console.log( iterator.next() );
for (let res of salaries) {
    console.log(res);
}