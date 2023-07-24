console.clear();
// We can also customize our own functions to accept and execute a callback.
// Here we can pass the sayGoodbye function that displays "Goodbye" into the greet() function.
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Teressa", sayGoodbye);

console.log();

function multiplyCallback(num) {
    const result = num * 2;
    console.log(`The input doubled is equal to ${result}`);
}
function doSomeMath(input, callback) {
    console.log("We are doubling the input number.");
    callback(input);
}
doSomeMath(2, multiplyCallback);

console.log();
// We can also use callback function in asynchronous JS methods.
function callbackFunc() {
    console.log("Executed last because we're using asynchrounous code.");
}
setTimeout(callbackFunc, 1500);
console.log(`Executed first`);
console.log(`Executed second`);