"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));



const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    
    // Деструктуризация объекта
    const {shops, height, moneyPer1m3, budget} = data;
    let sum = 0;

    shops.forEach((obj) => {
        sum += obj.width * obj.length * height * moneyPer1m3;
    });

    if (sum < budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
console.log( isBudgetEnough(shoppingMallData) );