"use strict";

// Псевдомассивы - это такие же массивы по структоре, но которые не имеют никаких методов


const arr = [1,2,23,4,51,6,7,8];

// Метод sort() сортирует элементы массива как строку,
// чтобы избежать этого, при сортировке цифр нужно передать callback функцию
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a-b;
}
// Свойство length состоит из последненго индекса массива + 1
arr[99] = 100;
console.log(arr.length);
// Удаление последненго элемента
arr.pop();
console.log(arr);

// Добавление элемента в конец массива
arr.push(10);
console.log(arr);

// Перебор массива
for (let i = 0; i < arr.length; i++) {
    console.log( arr[i] );  
}

// Перебор значений массива
for (let value of arr) {
    console.log( value );  
}

// Перебор индексов массива
for (let key in arr) {
    console.log( key );  
}

// Еще 1 способ перебора массива
// Calback функция принимает 3 аргумента:
// 1. элемент массива
// 2. индекс элемента массива
// 3. сам массив
// В этом способе нельзя использовать break и continue
arr.forEach(function(item, i, arr) {
    console.log( `${i}: ${item} внутри массива ${arr}` );
});


const str = prompt("","");
// Переводит строку в массив по разделителю
const products = str.split(', ');
// Сортировка массива
products.sort();
console.log(products);

// Переводит массив в строку
console.log(products.join('; '));



