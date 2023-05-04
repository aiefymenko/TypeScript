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