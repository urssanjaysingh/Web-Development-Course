console.clear();

/*We can also handle synchronous operations with async/await. This is a new syntax introduce with ES8.
 *  The async/await syntax makes writing and reading asynchronous code easy.
*/

// To inform JS that we are writing an asynchronous function,
// we add the async keyword before the function keyword
async function asyncFunc() {
    console.log("I am an async function!");
}
asyncFunc();

// we use the await keyword inside an async function.
// await waits for the promise to be resolved.
let traditionalPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        "This promise will always resolve after 2 seconds"
    ), 2000);
});
async function asyncFunction() {
    let value = await traditionalPromise;
    console.log(value);
}
asyncFunction();

// The async/await syntax allows us to have more readable code
// and is usually shorter than a traditional promise
