/** Synchrony is a term we use to talk about code instructions that execute one after another.
 * In Synchronous code, one line of code is executed only after the previous one has finished.
 */

const res = require("express/lib/response");

console.clear();
// Synchronous code can slow down our programs.
// Here we have to wait for the calculation of 6000 prime numbers to get the last console output.
console.log("We're calculating the first 6000 prime numbers.");
console.log("Waiting...");
const arr = [2];
let number = 3;
while (arr.length < 6000) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            number++;
            break;
        }
        if (i === number - 1) {
            arr.push(number);
            number++;
            break;
        }
    }
}
console.log(`We finished calculating the first ${arr.length} prime number.`);
console.log("We had to wait for this line to print.");

console.log();
// Asynchronous code doesn't wait for the previous instruction to finish.
function asyncExample() {
    console.log("We're calculating the first 10,000 prime numbers.");
    const arr = [2];
    let number = 3;
    while (arr.length < 10000) {
        for (let i = 2; i < number; i++){
            if (number % i === 0) {
                number++;
                break;
            }
            if (i === number - 1) {
                arr.push(number);
                number++;
                break;
            }
        }
    }
    return Promise.resolve(arr);
}
asyncExample().then(function (value) {
    console.log(`We calculated the first ${value.length} prime numbers`);
});
console.log("This line is printed during the calculation.");
