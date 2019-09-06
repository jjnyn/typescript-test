function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anne";
}
var person = {
    firstName: "Max",
    hobbies: ["Cooking", "Swimming"],
    greet: function (lastName) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    }
};
//greet({firstName: "Max", age: 28});
changeName(person);
greet(person);
person.greet("Anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
