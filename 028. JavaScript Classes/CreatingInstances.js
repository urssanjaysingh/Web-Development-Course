console.clear();
// Every time we create an object from a class, we're creating what's called an instance of that class.
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
    sayHi() {
        console.log("Hi, I'm " + this.name);
    }
}
const user1 = new User("Arya");
user1.isOnline = false;
console.log(user1);
user1.sayHi();

const user2 = new User("Bran");
console.log(user2);

// The constructor is what creates an instance.
// But it doesn't always need to have properties inside of it.
// It works even when empty.
class Sport {
    constructor(name) {
        this.name = name;
        this.scoreValue = 0;
        this.periods = 4;
        this.result = 0;
    }
    score() {
        this.result += this.scoreValue;
        console.log(this.result);
    }
}
const sport1 = new Sport("Football");
const sport2 = new Sport("Soccer");
sport1.scoreValue = 6;
sport2.scoreValue = 1;
sport1.score();
sport2.score();
