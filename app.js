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
*/
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//Arrow functions
console.log("ARROW FUNCTION");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
//without argument
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
//Default Parameters
console.log("Default Parameters");
var countdown = function (start) {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!", start);
};
countdown(10);
//Rest & Spread
console.log("Rest & Spread");
var numbers = [1, 10, 99, -5, 8];
console.log(Math.max.apply(Math, numbers)); //... == spread number array
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 3, 6));
/*
Rest Parameters & Tuples
Since TypeScript 3, you can also use tuples as types for rest expressions.
For example, these two function signatures are equal:
*/
console.log("Rest Parameters & Tuples");
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
console.log(printInfo("Jen", 26));
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
console.log(printInfo("Jen", 27));
//Destructuring
console.log("Destructuring");
var myHobbies = ["cooking", "sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userMax = {
    userName: "Max",
    userAge: 27
};
//destructuring an object
var userName = userMax.userName, userAge = userMax.userAge;
console.log(userName, userAge);
//const {userName: myName, userAge:myAge} = userMax;
//console.log(myName, myAge);
//Template Literals
var userName_ = "Max";
var greeting = "This is a heading!\nI'm " + userName_ + ", I am cool :)";
console.log(greeting);
