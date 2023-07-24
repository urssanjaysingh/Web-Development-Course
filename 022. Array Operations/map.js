console.clear();
/* 
JavaScript has a handy function called .map(), which, when called on an array, allow us to modify each
value and store it in a new array.
.map() follows the syntax:  
    arrayName.map()
>> To tell .map() how to modify each element, we need to pass a function as a parameter.
>> Before we can modify the array values, we need to pass them to the function. We do that by adding 
    parameter to the inline function.
>> Adding a second parameter allow us to access each iteration's index along with the array value.
*/

const values = [56, 27, 19, 20, 38];
const evenOrOdd = values.map(function (element) {
    return (element % 2) == 0;
});
console.log(evenOrOdd);

console.log();

const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function (element, index) {
    return index + ": " + element;
});
console.log(displayQueue);

console.log();

const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celsius = fahrenheit.map(function (element) {
    return (element - 32) * (5 / 9);
});
console.log(celsius);

console.log();

// to simplify our syntax, we can switch the inline function with a JavaScript arrow function instead.
const states = ['ak', 'md', 'va', 'ca', 'or'];
const uppercaseStates = states.map((element) => element.toUpperCase());
console.log(uppercaseStates);

console.log();

const names = ['lisa', 'jim', 'hannah', 'frank'];
const nameLength = names.map(function (element) {
    return element.length;
});
console.log(nameLength);
