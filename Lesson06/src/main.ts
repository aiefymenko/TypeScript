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