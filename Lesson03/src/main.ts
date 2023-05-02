let stringArr = ['one', 'hey', 'Artem'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1994;
guitars.unshift('Jim');

guitars = stringArr;
mixedData = guitars;

let test = [];
let bands : string[] = [];
bands.push('Van Halen');

//Tuple
let myTuple : [string, number, boolean] = ['Artem', 33, true];

let mixed = ['John', 1, false]

//Objects
let myObj : object
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {

}

const exampleObj = {
  prop1 : "Artem",
  prop2 : true
}

exampleObj.prop2 = false;

type Guitarist = {
  name: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1994, 5150, 'OU781']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II']
}

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(jp));

//Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
