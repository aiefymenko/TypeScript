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

    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang =lang;
    }
    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

//new instance of Coder
const Artem = new Coder('Artem', 'Rock', 33)
console.log(Artem.getAge());
// console.log(Artem.age);
// console.log(Artem.lang);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
        ) {
            super(name, music, age)
            this.computer = computer 
    }
    public getLang() {
        return `I write ${this.lang}`
    }
}

const Yana = new WebDev('Mac', 'Yana', 'Classic', 25);
console.log(Yana.getLang());
// console.log(Yana.age);
// console.log(Yana.lang);
// ///////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string


    constructor(name: string, instrument: string) {
        this.name = name,
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument} `
    }
}

const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name,
        this.id = ++Peeps.count //first id will 1
    }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Peeps.count);
console.log(Steve.id);
