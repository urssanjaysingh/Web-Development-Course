/* In 2015 there was a major JS revision called ECMAScript 2015 (ES6). */
console.clear();

// var is short for variable and const is short for constant
var fullName = "Emma Watson";
const occupation = "Activist";
let age = 30;
console.log(fullName);
console.log(occupation);
console.log(age);

console.log();

/* 
>> var can be declared multiple times, while let and const can't 
>> we can update let or var variables but we can't change const variables.
>> we can store data in a var variable before we even declare it. This process is called "hoisting".
    Example:
        zodiacSign = "Aries";
        var zodiacsign;
    but "hoisting" is not a good practice.
>> let and const prevent hoisting because we always need to declare these variables before storing data.

Note: Declaring variables with let and const is essential for avoiding many other code errors,
so we should use them as our first option. 
*/
var surname = "Smit";
var surname = "Smith";
console.log(surname);

console.log();

/* "Scope" is a term used to indicate where variables are available.

>>  Local or function scope refers to the part of code inside a function. We can't access the local 
    variable outside the function.

>>  The space outside a function is called global scope. We can access a global variable outside and
    also from inside the travel function.

>>  Block scope: It's the part of our code in between the braces {} that belong to loop or conditionals. */
function visitCountry() {
    var country = "Argentina";
    console.log(country);
}
visitCountry();

let cityToVisit = "Salzburg";
function travel() {
    console.log("Let's go to " + cityToVisit);
}
travel();
console.log(cityToVisit);

if (10 === 10) {
    console.log("This space here is block scope.");
}