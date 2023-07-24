console.clear();
/** JavaScript has some native methods that execute code asynchronously, 
 * such as setTimeout() and setInterval(). */

// setTimeout() method sets a timer, in milliseconds, that executes a code block when the time expires.
// The code here is asynchronous. That means that while we wait for the callback to be executed.
// The delay parameter is the time, in milliseconds, that passes before the function or code block executes.
// setTimeout() is always asynchronous, even if the delay parameter is omitted or we set is as 0.
console.log('Executed First');
setTimeout(() => {
    console.log('Executed Last');
}, 2000);
console.log('Executed Second');
