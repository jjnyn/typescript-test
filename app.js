/*
// string
let myName: string = 'Max';
// myName = 28;

// number
let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2// 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

//Arrow functions
console.log("ARROW FUNCTION");
const addNumbers = function(num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10,3));

//without argument
const greet_= () => {
    console.log("Hello");
}
greet_();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

//Default Parameters
console.log("Default Parameters");
const countdown = (start: number) => {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!", start);
}
countdown(10);

//Rest & Spread
console.log("Rest & Spread");
const numbers_ = [1, 10, 99, -5, 8];
console.log(Math.max(...numbers_)); //... == spread number array

function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max",1,2,3,6));

/*
Rest Parameters & Tuples
Since TypeScript 3, you can also use tuples as types for rest expressions.
For example, these two function signatures are equal:

console.log("Rest Parameters & Tuples");

function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
console.log(printInfo("Jen",26));

function printInfo2(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
console.log(printInfo("Jen",27));

//Destructuring
console.log("Destructuring");
const myHobbies = ["cooking","sports"];
const [hobby1,hobby2] = myHobbies;
console.log(hobby1,hobby2);

const userMax = { //object
    userName: "Max",
    userAge: 27
}
//destructuring an object
const {userName, userAge} = userMax;
console.log(userName, userAge);
//const {userName: myName, userAge:myAge} = userMax;
//console.log(myName, myAge);

//Template Literals
const userName_ = "Max";
const greeting = `This is a heading!
I'm ${userName_}, I am cool :)`;
console.log(greeting);

class Person {
    //name: string;
    private type: string;
    protected age: number = 27;

    constructor(public name: string, public username: string){
        //this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Max","max");
console.log(person.name, person.username);
person.printAge();
person.setType("cool guy");

//Inheritance //"extends" keyword
class Max extends Person {
    //name = "Max";

    constructor(username: string) {
        super("Max",username); //super: call the root
        this.age = 31; //refer to root class Person; protected type can be accessed from sub-items
        //console.lot(this.type); //type is private, not accessible here
    }
}
//const max = new Max("Anna", "max"); //extends function will overwrite this value, will print Max but Anna
const max = new Max("max"); //constructor already called name, only have to pass username value = "max"
console.log(max);

//Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }
    set species(value: string){
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//# sourceMappingURL=app.js.map