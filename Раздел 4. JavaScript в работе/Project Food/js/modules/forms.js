import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {

    // Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(form => bindPostData(form));

    

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            // Добавляем элемент после формы
            form.insertAdjacentElement('afterend', statusMessage);

            // Устаревший вариант AJAX запроса

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // Когда используем связку XMLHttpRequest + FormData,
            // заголовки устанавливать не нужно, он устанавливается автоматически
            // request.setRequestHeader('Content-type', 'multipart/form-data');

            // Формируем данные для отправки на сервер с помощью объекта FormData
            // const formData = new FormData(form);

            // Формируем заголовок для отправки данных на сервер в формате JSON
            // request.setRequestHeader('Content-type', 'application/json');
            // // Формируем данные для отправки на сервер в формате JSON
            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);

            // request.send(json);
            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });

            // Отправка запроса на сервер с помощью Fetch API

            // Формируем данные для отправки на сервер в формате JSON
            const formData = new FormData(form);
            const json = JSON.stringify( Object.fromEntries(formData.entries()) );

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        },4000);
    }

}

export default forms;