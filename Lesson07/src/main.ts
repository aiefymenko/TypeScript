//INDEX SIGNATURES
// interface TransactionObj {
//     readonly [index: string]: number
// }
interface TransactionObj { //This would require pair of index/key in next functions
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransaction: TransactionObj = {
     Pizza: -10,
     Books: -5,
     Job: 50,
     Artem: 33
}

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);


let prop: string = 'Pizza'
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
}

console.log(todaysNet(todaysTransaction));

// todaysTransaction.Pizza = 40;
console.log(todaysTransaction['Artem']); //returns undefined

///////////////////////////////////////////
interface Student {
    [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100,200]
}

console.log(student.test);