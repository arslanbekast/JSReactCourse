function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye');
    };
}


// Синтаксис экспорта Common.js
module.exports = myModule;