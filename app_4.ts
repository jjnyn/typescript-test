interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anne";
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Swimming"],
    greet(lastName: string) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    }
};

//greet({firstName: "Max", age: 28});
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson{
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);