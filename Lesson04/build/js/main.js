"use strict";
// Literal types
let myName;
let userName;
userName = 'Amie';
//fucntions
const add = (a, b) => {
    return a + b;
};
//function without a return should be void type of data
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
