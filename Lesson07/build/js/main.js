"use strict";
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50
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
