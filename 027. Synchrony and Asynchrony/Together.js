console.clear();
// We can take advantage of synchrony and asynchrony together.
// Here we chain operations to a string that will happen one after another.
const word = "enola";
function reverseCallback() {
    const result = word.split("").reverse().join("");
    console.log(`The string reversed is: ${result}`);
    console.log("Executed last because we're using asynchronous code.");
}
setTimeout(reverseCallback, 1500);
console.log('Executed first');
