// Exercise 1
class Car {
    name: string;
    acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }
    
    honk() {
        console.log("Toooooooooot!");
    }
    //this.honk = function() {
    //    console.log("Toooooooooot!");
    //console.log("Toooooooooot!");};

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
    //this.accelerate = function(speed:number) {
    //    this.acceleration = this.acceleration + speed;
    //this.acceleration = this.acceleration + speed;}
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);


// Exercise 2 - Inheritance
//var baseObject = {
//    width: 0,
//    length: 0
//};
class baseObject {
    width: number = 0;
    length: number = 0;
};

//var rectangle = Object.create(baseObject);
//rectangle.calcSize = function() {
//    return this.width * this.length;
//};
class Rectangle extends baseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());


// Exercise 3 - Getters & setters
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
    }
};


// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);