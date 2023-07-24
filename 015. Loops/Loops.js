console.clear();

// Self-assignment
let wallet = 3;
wallet += 1;    // wallet = wallet + 1;
console.log(wallet);

// while-loop
console.log();
let keepGoing = true;
while (keepGoing === true) {
    console.log("keepGoing!");
    console.log("and again");
    console.log("keepGoing: " + keepGoing);
    keepGoing = false;
    console.log("keepGoing: " + keepGoing);
}

console.log();

let counter = 5;
while (counter < 10) {
    console.log(counter);
    counter++;
}

console.log();

// for-loop
for (let i = 0; i < 4; i++) {
    console.log("*********_________");
}

console.log();

for (let i = 1; i < 5; i++) {
    console.log(i);
}
