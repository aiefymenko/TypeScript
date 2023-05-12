"use strict";
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Artem: 33
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransaction));
// todaysTransaction.Pizza = 40;
console.log(todaysTransaction['Artem']); //returns undefined
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
console.log(student.test);
