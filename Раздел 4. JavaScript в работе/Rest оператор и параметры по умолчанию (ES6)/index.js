"use strict";

// Rest (...) оператор и параметры по умолчанию (ES6)

// Rest (...) оператор объединяет отдельные элементы в 1 массив

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');


// Параметры по-умолчанию
function calcOrDoublr(number, basis = 2) {
    console.log(number * basis);
}
calcOrDoublr(3);