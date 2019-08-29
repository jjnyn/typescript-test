// Exercise 1
//example: const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
var double = (value1: number) => value1 * 2;
console.log(double(10));

// Exercise 2
var greet1 = function (name: string = "Max") {
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");

// Exercise 3
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min(...numbers1));

// Exercise 4 **
var newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers1);
newArray.push(...numbers1);
console.log(newArray);

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
//var result1 = testResults[0];
//var result2 = testResults[1];
//var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
console.log(firstName, experience);