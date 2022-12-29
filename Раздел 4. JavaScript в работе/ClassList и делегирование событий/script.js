"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');


console.log(btns[0].classList.length); // Получаем кол-во классов у элемента
console.log(btns[0].classList.item(0)); // Получаем название первого класса элемента
console.log(btns[1].classList.add('red', 'green')); // Добавляем класс к элементу
console.log(btns[0].classList.remove('blue')); // Удаляем класс у элемента
console.log(btns[0].classList.toggle('blue')); // Переключает класс у элемента

// Проверяем наличие класса
if (btns[1].classList.contains('red')) {
    console.log('red');
}


btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// Устаревший метод className - получает название классов в одной строке
console.log(btns[0].className);


// Делегирование события клик с родителя на его потомков
wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('Hello');
    // }
    // if (event.target && event.target.classList.contains('red')) {
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);