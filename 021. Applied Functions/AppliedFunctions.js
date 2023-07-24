console.clear();

// we can add other code blocks inside a function.
function isRentingAge(age) {
    if (age >= 21) {
        console.log("Approved");
    }
    console.log("Check Complete");
}
isRentingAge(26);

console.log();

// if a function changes its output based on its input, we need a conditional statement.
function applySeniorDiscount(age) {
    if (age >= 65) {
        console.log(age + " year old has 50% OFF");
    }
}
applySeniorDiscount(65);

function checkPassword(word) {
    if (word === "12345") {
        console.log("Logging in");
    } else {
        console.log("Wrong password");
    }
}
checkPassword("swordfish");

console.log();

// if we use conditional statements, we can use return to stop a function at different parts
// of the code based on the input.
function getDiscount(age) {
    if (age <= 18) {
        return "50% OFF";
    } else if (age >= 65) {
        return "30%";
    }
    return "Full price";
}
const discount = getDiscount(25);
console.log(discount);

console.log();

// if we have to repeat the same instructions more than once, we can add a loop inside a function
function displayNumbers() {
    for (let i = 0; i <= 3; i++) {
        console.log("And a " + i);
    }
}
displayNumbers();

function drawVerticalLine(times) {
    for (let i = 0; i < 5; i++) {
        console.log("|");
    }
}
drawVerticalLine(5);

// Looping Over Arrays
const grades1 = [99, 66, 77, 84];
const grades2 = [50, 60, 70, 80];

function findGrade(grades) {
    console.log(grades1);
    console.log(grades2);
}
// we can access elements stored in multiple arrays using same function
findGrade(grades1, grades2); 

// let's search 66 in the grades
const grades = [91, 66, 77, 84, 66];
const search = 66;
function searchGrade(grades, search) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] === search) {
            console.log("The grade exists!");
            break;
        }
    }
}
searchGrade(grades, search);
