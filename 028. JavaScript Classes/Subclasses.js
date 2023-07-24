console.clear();

class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    receiveDamage() {
        this.life = this.health - 10;
    }
    attack() {
        console.log("Swing " + this.weapon);
    }
}

class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
    }
    receiveDamage() {
        this.health = this.health - 5;
    }
    attack() {
        super.attack();
        console.log(this.warCry);
    }
}

const alexander = new Warrior("sword", "Alala!");
const leonidas = new Warrior("spear", "Molon labe!");
alexander.attack();
leonidas.attack();
