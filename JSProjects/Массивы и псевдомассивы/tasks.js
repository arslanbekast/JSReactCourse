"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str ='';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(item => {
        str += `${item} `;
    });
    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log( city.toLowerCase() );
    });
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {

    if (typeof(str) !== 'string') return 'Ошибка';

    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

 console.log( reverse(someString) );


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

 function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));