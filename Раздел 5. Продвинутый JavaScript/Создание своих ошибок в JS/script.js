'use strict';

// Создание своих ошибок в JS

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];
try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i+1} нет id!`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name == "SyntaxError") {
        console.log(e.message);
    } else throw e;

    // console.error(e.name);
    // console.log(e.stack);
}


// const err = new Error('sdfsdfsdf');
// console.log(err.name, err.message, err.stack);

// const err = new SyntaxError('sdfsdfsdf');
// console.log(err.name, err.message, err.stack);