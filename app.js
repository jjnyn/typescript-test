// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
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
console.log(Math.max.apply(Math, numbers));
