const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = () => {
//     alert(111);
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// let i = 0;
const deleteBtn = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteBtn);
    // }
};
// Всплытие событий - это когда обработчик события сначала срабатывает 
// на самом вложенном элементе затем на родителе и так выше по иерархии
// btn.addEventListener('click', deleteBtn);
// overlay.addEventListener('click', deleteBtn);

// Назначаем обработчик события на все кнопки
// При передаче 3 параметра once, событие сработает только 1 раз
btns.forEach(btn => btn.addEventListener('click', deleteBtn, {once: true}));

// Отмена стандартного поведения браузера
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // Отмена стандартного поведения

    console.log(event.target);
});
