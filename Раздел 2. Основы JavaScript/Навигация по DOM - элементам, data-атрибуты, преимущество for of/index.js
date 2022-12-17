"use strict";

// Node в html это все узлы в документе (элементы, тексты, комментарии, переносы строк и т.д.)

// Для получения нодв используются отдельные методы например parentNode, для получения элементов используются другие методы например parentElement

console.log(document.head);
console.log(document.documentElement);

console.log(document.body.childNodes); // Дочерние Nodes body
console.log(document.body.firstChild); // Первый Node body
console.log(document.body.lastChild); // Последний Node body

console.log(document.body.firstElementChild); // Первый элемент body
console.log(document.body.lastElementChild); // Последний элемент body


console.log(document.querySelector('#current').parentNode); // Получаем родительскую ноду элемента #currrent
console.log(document.querySelector('#current').parentNode.parentNode); // Получаем родительскую ноду родителя элемента #currrent

console.log(document.querySelector('#current').parentElement); // Получаем родительский элемент элемента #currrent
console.log(document.querySelector('#current').parentElement.parentElement); // Получаем родительский элемент родителя элемента #currrent

// Получем элемент следующий за элементом с атрибутом data-current="3"
console.log(document.querySelector('[data-current="3"]').nextElementSibling);



for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }

    console.log(node);
}