"use strict";
//convert to mor or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS-sees no problem here but it returns string
let nextVal = addOrConcat(2, 2, 'concat');
//double casting or force casting
10;
//The DOM
const img = document.querySelector('img'); //non null assertion
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
