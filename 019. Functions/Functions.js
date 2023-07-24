console.clear();

function greetUser() {
    console.log("Good morning Anna");
    console.log("welcome back");
}
greetUser();

console.log();

function weatherUpdate() {
    console.log("Weather update");
    console.log("Sunny skies ahead");
}
weatherUpdate();

console.log();

// parameter
function greet(name) {
    console.log("Hello, " + name);
}
greet("April");
greet("Leslie");

console.log();

// return value
function userAge(number) {
    const age = "User age: " + number;
    return age;
}
const result = userAge(29);
console.log(result);

console.log();

// multiple parameter
function display(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
display("Alex", "Morgan");

// function names should be descriptive and should indicate the main purpose of the function.
// function names should contain at least one verb, verb should be prefix.
// function that mainly return a value without changing it in any way start with verb like get.
// function names should be consistent. eg. calculateSum, calculateDifference

console.log();

// function with array
function displayNames(names) {
    console.log(names);
}
const students = ["Laurel", "Yanni"];
displayNames(students);

function displayNumberOfNames(names) {
    console.log(names.length);
}
displayNumberOfNames(students);

function getFirstName(names) {
    return names[0];
}
const firstMember = getFirstName(students);
console.log(firstMember);