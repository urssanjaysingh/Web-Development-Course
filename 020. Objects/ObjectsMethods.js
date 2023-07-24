console.clear();


var dog = {
    name: "Bo",
    bark: function (word) {
        return "woof woof, " + word;
    }
};
console.log(dog.bark("hungry"));

const myCereal1 = {
    name: "Trix",
    display: function () {
        console.log(this.name);
    }
};
myCereal1.display();

const myCereal2 = {
    name: "Trix",
    changeAndDisplay: function () {
        this.name = "Cap'n Crunch";
        console.log(this.name);
    }
};
myCereal2.changeAndDisplay();
