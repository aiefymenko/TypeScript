type One = string;
type Two = string | number;
type Three = 'hello';

//convert to mor or less specific
let a: One = 'hello';
let b = a as Two; //less specific type
let c = a as Three //more specific

let d = <One> 'world'
let e = <string | number> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2,2,'concat') as string;

//Be careful! TS-sees no problem here but it returns string
let nextVal: number = addOrConcat(2,2,'concat') as number;

//double casting or force casting
(10 as unknown) as string;

//The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img')! //non null assertion

img.src
myImg.src