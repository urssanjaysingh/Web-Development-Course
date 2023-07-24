console.clear();
/** 
>> setInterval() is another native JavaScript method that executes code asynchronously.
>> With setInterval we can execute some code every set period of time.
>> setInterval executes the callback function forever, with a delay of the specified number of
    milliseconds we pass as the second parameter
>> The first execution of the callback occurs after the time specified. It doesn't execute immediately.
>> To stop setInterval() from running indefinitely, we can use the clearInterval method.
*/
let blinkerOn = false;
let blinkerInterval = setInterval(() => {
    if (blinkerOn) {
        console.log("Blinker off");
        blinkerOn = false;
    } else {
        console.log("Blinker on");
        blinkerOn = true;
    }
}, 500);
setTimeout(() => {
    clearInterval(blinkerInterval);
    console.log("STOP!");
}, 2500);
