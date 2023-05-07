//Type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string,
  active?: boolean,
  albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal types

let myName: 'Artem';

let userName: 'Artem' | 'John' | 'Amie';
userName = 'Amie';


//fucntions

const add = (a: number,b: number): number => {
  return a + b;
}
//function without a return should be void type of data
const logMsg = (message: any): void => {
  console.log(message);
}

logMsg('Hello');
logMsg(add(2,3));

let subtract = function (c: number, d: number):
number {
  return c - d;
}

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// } 

let multiply: mathFunction = function(c,d) {
  return c * d;
};

logMsg(multiply(2,2));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}


//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(2,3,2));
logMsg(sumAll(undefined,3));


//Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1,2,3,4));

// Never type of function
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    if (i > 100) break
  }
}


//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
  ? true : false;
}


//use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string'
  if (isNumber(value)) return 'number'
  return createError('This should never happen')
}