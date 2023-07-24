console.clear();
/*
We can use the .filter() function. .filter() creates a new array with values that satisfy a condition.
*/

const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function (element) {
    return element[0] == "S";
});
console.log(sNames);

console.log();

const testScores = [72, 95, 90, 71, 75, 79];
const A = testScores.filter(function (element) {
    return element >= 90;
});
console.log(A);

console.log();

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const workWeek = week.filter(function (element, index) {
    return (index > 0 && index < 6);
});
console.log(workWeek);

console.log();

// to simplify our syntax, we can incorporate a JavaScript arrow function in place of the inline function.
const scores = [72, 95, 90, 71, 75, 79];
const B = scores.filter(element => element >= 90);
console.log(B);

