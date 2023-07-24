console.clear();
// To inherit features from a class, we need to use the extends keyword in the class definition.
// If a subclass doesn't have a constructor() method,
//  the superclass constructor becomes the default constructor.
// A subclass also inherits its superclass methods.
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
// Inheritance becomes useful when subclass have additional functionality.
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog("Pug");
console.log(dog);
console.log(dog.name);
const dog1 = new Dog("Chocolate Lab");
dog1.eat();
dog1.bark();

class Bird extends Animal { }
const bird = new Bird("Blue Jay");
bird.eat();
