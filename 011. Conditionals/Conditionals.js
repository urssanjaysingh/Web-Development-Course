console.clear();

let isDay = false;
if (isDay === true) {
    console.log("Lights off!");
} else {
    console.log("Lights on!");
}

let hour = 20;
if (hour < 12) {
    console.log("Good morning");
} else if (hour < 17) {
    console.log("Good afternoon");
} else if (hour < 21) {
    console.log("Good evening");
} else {
    console.log("Good night");
}
