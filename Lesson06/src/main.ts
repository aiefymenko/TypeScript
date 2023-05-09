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

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang =lang;
    }
}