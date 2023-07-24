console.clear();

// A callback function is a regular function that we pass into another function
// and then call to perform a task
function add(number1, number2, callback) {
    let result = number1 + number2;
    callback(result);
}
function logResult(result) {
    console.log(`The result is: ${result}`);
}
add(2, 3, logResult);

console.log();

// Here, we pass the callback function to the .map() array method.
const arr1 = [1, 2, 3, 4, 5];
function callback1(num) {
    return num * 2;
}
const newEvenArray = arr1.map(callback1);
console.log(newEvenArray);
console.log("This code is synchronous.");

console.log();
// Here, we pass the callback function to the .filter() method.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function callback2(num) {
    return num % 2 === 0;
}
const evenNumArray = arr2.filter(callback2);
console.log(evenNumArray);
console.log("This code is also synchronous.");

console.log();
// You may have seen these methods written in a different form, such as using modern ES6 arrow functions.
const arr3 = [1, 2, 3, 4, 5];
const newArray = arr3.map((num) => num * 2);
console.log(newArray);
console.log("This code uses an ES6 arrow function.");
console.log("This code is synchronous.");
