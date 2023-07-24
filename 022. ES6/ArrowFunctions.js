console.clear();

/* Arrow Functions are part of the ES6 JavaScript standard and are used to write cleaner and shorter code. 
>>  Arrow functions are a type of anonymous function, meaning that they don't have a function name. 
    If we want to call these functions, we need to store them inside a variable and call the variable
    with parentheses at the end.

>>  We use arrow operator => right after the parentheses and before the opening curly braces. */

// normal function
function getGreeting1() {
    return 'Hello';
}
console.log(getGreeting1());

console.log();

// arrow function 
const getGreeting2 = () => 'Hi';
console.log(getGreeting2());

console.log();

// parameter
const greeting = (firstName) => {
    return 'Greetings ' + firstName;
};
console.log(greeting('Tony'));

console.log();

// we don't have to add the parentheses if we have only one parameter.
const getPrice1 = total => {
    const discount = 0.10;
    return total - (discount * total);
};
console.log(getPrice1(500));

// multiple parameter 
const getPrice = (total = 200, discount = 3) => total - (discount / 100 * total);
console.log(getPrice());
