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

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
} 

let multiply: mathFunction = function(c,d) {
  return c * d;
};

logMsg(multiply(2,2));