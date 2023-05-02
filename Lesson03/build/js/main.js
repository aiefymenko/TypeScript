"use strict";
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
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Artem', 33, true];
let mixed = ['John', 1, false];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Artem",
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1994, 5150, 'OU781']
};
