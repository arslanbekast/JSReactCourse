"use strict";

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// Его основные методы это:

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Ivan');
set.add('Oleg');

console.log(set);

// Перебор Set
for (let value of set) {
    console.log(value);
}

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});

// console.log(set.values());
// console.log(set.keys()); // Ключей у Set нет. Вернутся значения
// console.log(set.entries());

const arr2 = [1, 2, 2, 3, 3, 4, 5, 6, 4];
function unique(arr) {
    return Array.from( new Set(arr) );
}

console.log(unique(arr2));