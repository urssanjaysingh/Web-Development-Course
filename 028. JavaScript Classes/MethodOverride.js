console.clear();
// Overriding a method replaces the code of the method in the superclass with that of the subclass.
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack() {
        console.log("Swing " + this.weapon);
    }
    receiveDamage() {
        this.health = this.health - 10;
    }
}
const human = new Human("ax");
human.receiveDamage();
console.log(human.health);

// To override a method, we give it the same name and parameters as the method in the superclass.
// if we need the behaviour from the superclass's method, we can call it with the super keyword.
class Wizard extends Human {
    attack() {
        super.attack();
        console.log("Zimzalabim!");
    }
    receiveDamage() {
        this.health = this.health - 5;
    }
}
const wizard = new Wizard("staff");
wizard.attack();
wizard.receiveDamage();
console.log(wizard.health);
