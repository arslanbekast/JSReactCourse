'use strict';

const box = document.getElementById('box'), 
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), //Так тоже можно
      oneHeart = wrapper.querySelector('.heart'); //Так тоже можно
    //   hearts = document.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// Создаем элемент. Элемент еще НЕ на странице
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

// Добавление класса к элементу (устаревший вариант)
div.classList.add('black');

// document.body.append(div); // Добавляем элемент на страницу в тег body

//document.querySelector('.wrapper').append(div); // Так тоже можно
wrapper.append(div);  // Добавление элемента в конец блока wrapper
// wrapper.appendChild(div); // Устаревший вариант
// wrapper.prepend(div); // Добавление элемента в начало блока wrapper

// hearts[1].before(div); // Добавление перед элементом
// wrapper.insertBefore(div, hearts[1]); // Устаревший вариант добавления элемента div перед элементом hearts[1]
// hearts[1].after(div); // Добавление после элемента

// circles[2].remove(); // Удаление элемента
// wrapper.removeChild(hearts[0]); // Устаревший вариант удаления элемента
// hearts[0].replaceWith(circles[0]); // Элемент hearts[0] заменяется элементом circles[0]
// wrapper.replaceChild(circles[0], hearts[0]); // Устаревший вариант. hearts[0] меняется на circles[0]


div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello"; // Добавление только текста (без тегов)

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // Вставка html кода перед элементом div
div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // Вставка html кода в начало элемента div (внутри элемента div)
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // Вставка html кода в конец элемента div (внутри элемента div)
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // Вставка html кода после элементом div


