"use strict";
//basic structure for class component
// class Coder {
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang =lang;
//     }
// }
//DRY version of class
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
//new instance of Coder
const Artem = new Coder('Artem', 'Rock', 33);
console.log(Artem.getAge());
// console.log(Artem.age);
// console.log(Artem.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Yana = new WebDev('Mac', 'Yana', 'Classic', 25);
console.log(Yana.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name,
            this.id = ++Peeps.count; //first id will 1
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(Steve.id);
////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(elem => typeof elem === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zeppeling'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = 'Van Halen';
