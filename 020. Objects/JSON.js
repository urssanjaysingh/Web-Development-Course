console.clear();

// we can create jsonVariable like regular object {} but wrapped with single quotes like '{}'
const jsonVariable = '{}';

// unlike JS object, in JSON, we need to include the keys between quotes like "times": 2
// JSON cannot store functions inside
const jsonString = '{"story": "Life", "times": 2, "fiction": true}';
console.log(jsonString);

console.log();

// we can convert a JS object to a JSON with the JSON.stringify() method.
const concert = {
    band: "Super Carrots",
    music: "Indie"
};
console.log(concert);
console.log(JSON.stringify(concert));

console.log();

// we can also transform a JSON string into a JS object with JSON.parse() method.
const dog = '{"name":"Rocko", "age":3}';
console.log(dog);
console.log(JSON.parse(dog));
