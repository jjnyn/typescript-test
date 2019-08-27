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
var myName = 'Max';
//myName = 18;
//number
var myAge = 27;
//myAge = 'Max';
//boolean
var hasHobbies = false;
//hasHobbies = 1;
//array 
var hobbies = ["cooking", "sports"];
//console.log(hobbies[0]);
//any
var car = "BMW";
//console.log(car);
car = { brand: "BMW", series: 3 };
//console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
}
//argument type
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2,'Mac'));
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects
var userData = {
    name: "Max",
    age: 27
};
//complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex1 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealAge = 27;
myRealAge = "27";
//myRealAge = true; //error
//check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never [a type]
function neverReturns() {
    throw new Error('An error!');
}
//nullable types
var canBeNull = 12;
canBeNull = null;
