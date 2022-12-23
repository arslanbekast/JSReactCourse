"use strict";

// Дескрипторы свойств и полезные методы объектов

// Атрибуты (флаги) свойств и методов объекта
// writable - если true, то свойство объекта можно изменить, если false, то оно будет только для чтения
// enumerable - если true, то свойство будет перечисляться в циклах, если false, то свойство не будет перечисляться в циклах
// configurable - если true, то свойство можно удалить, а атрибуты (флаги) его можно будет изменить, если false - нельзя менять ничего


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // Выводим флаги(атрибуты) свойства name объекта user

Object.defineProperty(user, 'name', {writable: false}); // Меняем атрибут writable у свойства name. Теперь свойство name доступен только для чтения.

//user.name = 'John'; // Свойство name не принимает новое значение, так как его атрибут writable мы изменили на false
console.log(user.name);

Object.defineProperty(user, 'gender', {value: 'male'}); // Добавляем объекту user новое свойство gender со значением male. 
                                                        // При добавлении свойства таким образом его атрибуты writable, enumerable, configurable имеют значение false
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Меняем атрибут enumerable на false у метода showMyPublicData, чтобы он не был доступен для перебора в цикле
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for (let key in user) console.log(key);

// Метод для изменения атрибутов у множества свойст
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});
