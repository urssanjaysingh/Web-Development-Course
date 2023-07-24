console.clear();
/* Template literals, makes it easy to add variables and expressions inside of strings. */

const fullName = "Helen McGuire";
console.log(`Hello ${fullName}!`);

console.log();

const quantity = 20;
const price = 10;
const cost = `Total cost : ${quantity * price}`;
console.log(cost);

console.log();

/* When calling a function, we leave out the parenthesis () if we're passing a string literal as an
argument to the function. */
const greetings = (name) => {
    return `Bonjour ${name}!`;
};
console.log(greetings`Jane`);
