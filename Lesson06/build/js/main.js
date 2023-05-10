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
