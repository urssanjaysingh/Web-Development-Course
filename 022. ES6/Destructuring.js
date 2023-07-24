console.clear();
/** Destructuring simplifies the use of array items, and we can use this functionality with objects too!
 * We can extract an object's values into new variables using braces {}.
 */

// The three variable inside the {} correspond to the three values in the object.
// Use the exact names of the properties for the variables in the destructuring.
// to separate the first and second values, and keep the rest of the object together, add ... and
// otherInfo after the first two properties.
const userInformation = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
};
const {
    firstName,
    lastName,
    ...age
} = userInformation;
console.log(firstName, lastName, age);

console.log();

// We use the original property name, a colon, and a variable name
// if we want to use variable names that differ from the object's properties.
const carInformation = {
    item1: "Mazda",
    item2: "cx30",
    item3: "red",
};
const {
    item1: brand,
    item2: model,
    item3: color
} = carInformation;
console.log(brand);
console.log(model);
console.log(color);

console.log();

const cars = ["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota", "Chevrolet", "Nissan", "Kia"];
if (cars[0] === "Hyundai") {
    console.log('The prettiest car is a Hyundai');
} else if (cars[1] === "Jeep") {
    console.log('The prettiest car is Jeep');
} else {
    console.log(`${cars[0]} cars are prettier than ${cars[1]} cars.`);
}

console.log();

const [firstCar, secondCar] = cars;
if (firstCar === "Hyundai") {
    console.log('The prettiest car is a Hyundai');
} else if (secondCar === "Jeep") {
    console.log('The prettiest car is a Jeep');
} else {
    console.log(`${firstCar} cars are prettier than ${secondCar} cars.`);
}

console.log();

const [companyName, phone, address] = ['Leo Pizza', '19873456789', '911 SW Main St, Bunkie'];
console.log(companyName);
console.log(phone);
console.log(address);

// If we don't want to destructure every element in the array,
// we can save the rest in anyOtherVariable by using ... before anyOtherVariable.
// const [companyName, ...anyOtherVariable] = ['Leo Pizza', '19873456789', '911 SW Main St, Bunkie'];

// The , inside the [] skips variable in the destructuring array's first and second positions.
// const [, , address] = ['Leo Pizza', '19873456789', '911 SW Main St, Bunkie'];
// console.log(address);

console.log();

// We can set default values when we're unsure whether an unpacked element value exists, or is set to undefined
const [, , enginesQty = 1] = ['Airbus', 'A300'];
console.log(enginesQty);

console.log();

// We can destructure arrays when we are defining the function parameters.
const cookwareMaterials = ['Stainless Steel', 'Cooper', 'Aluminum', 'Carbon Steel', 'Cast Iron'];
function getCookwareMaterials([first, second]) {
    console.log(`The bestSelling materials for the cookware at home are ${first} and ${second}.`);
}
getCookwareMaterials(cookwareMaterials);

console.log();

const userInfo = {
    firstName: "Ari",
    lastName: "Bietks",
};
function customGreeting({
    firstName,
    lastName,
    age = 34
}) {
    console.log(`Hi! My name is ${firstName} ${lastName}. I am ${age}`);
}
customGreeting(userInfo);
