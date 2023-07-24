console.clear();
/**
    .reduce() can combine array values into a value using an inline function.
**/

const miles = [33, 95, 79];
const total = miles.reduce(function (prev, curr) {
    return prev + curr;
});
console.log(total);

// to simplify our syntax, we can incorporate a JS arrow function.
const totalVal = miles.reduce((prevVal, currVal) => prevVal + currVal);
console.log(totalVal);

// by including a third parameter in the function, we can also access each iteration's index.
const prices = [17.50, 20.25, 24.75, 13.50, 8.50];
const discountFactor = [0.9, 0.9, 1.0, 1.0, 0.9];
const totalPrice = prices.reduce(function (prevVal, currVal, index) {
    return prevVal + (currVal * discountFactor[index]);
});
console.log(totalPrice);
