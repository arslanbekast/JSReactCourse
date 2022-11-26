console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 && !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done');
}

// Задачи

for (let i=5; i<=10; i++) {
    console.log(i);
}


for (let i=20; i>=10; i--) {
    if (i === 13) break;
    console.log(i);
    
}

for (let i=2; i<=10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }  
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;
while (i <= 16) {
    
    if (i % 2 === 0) {
        i++;
        continue;
        
    } else {
        console.log(i);
    }
    i++;
}

const arrayOfNumbers = [];

    for (let i=5; i<=10; i++) {
        arrayOfNumbers[i-5] = i;
    }
    
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;


    function firstTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
    
        for (let i=0; i < arr.length; i++) {
            result[i] = arr[i];
        }
        console.log(result);
        
        // Не трогаем
        return result;
    }
    firstTask();

    function secondTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        for (let i=0; i < data.length; i++) {
            if (typeof data[i] == 'string') data[i] += " - done";
            else data[i] *= 2;
        }
        console.log(data);
        
        
        // Не трогаем
        return data;
    }
    secondTask();

    function thirdTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
    
        for (let i = 1; i <= data.length; i++) {
            result[i - 1] = data[data.length - i];
        }
    
        console.log(result);
        
        
        // Не трогаем
        return result;
    }

    thirdTask();

    const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);