/* 
//enum
enum Color {
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green;
console.log(myColor);
*/
//console.log("It works!");

//string
let myName = 'Max';
//myName = 18;

//number
let myAge = 27;
//myAge = 'Max';

//boolean
let hasHobbies = false;
//hasHobbies = 1;

//array 
let hobbies = ["cooking","sports"];
//console.log(hobbies[0]);

//any
let car: any = "BMW";
//console.log(car);
car = {brand: "BMW", series: 3};
//console.log(car);

//functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello");
}

//argument type
/*
function multiply(value1, value2): number {
    return value1 * value2;
}
*/

//console.log(multiply(2,'Mac'));

//function types
let myMultiply: (num1: number, num2: number) => number;
//myMultiply = multiply;
//console.log(myMultiply(5,2));

//objects
let userData: { name: string, age:number} = {
    name:"Max",
    age:27
};

//complex objects
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100,3.99,10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex1: Complex = {
    data: [100,3.99,10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

//union types
let myRealAge: number | string = 27;
myRealAge = "27";
//myRealAge = true; //error

//check types
let finalValue = "A string"; 
if(typeof finalValue == "number") {
    console.log("Final value is a number");
}

//never [a type]
function neverReturns():never {
    throw new Error('An error!');
}

//nullable types
 let canBeNull: number | null = 12;
 canBeNull = null;
