console.clear();
// The async/await syntax allows us to have more readable code
// and is usually shorter than a traditional promise
let beverages = ['tea', 'coffee', 'apple cider'];

function pickRandomBeverage() {
    return new Promise(function (resolve, reject) {
        let randomIndex = Math.floor(Math.random() * beverages.length);
        let selectedBeverage = beverages[randomIndex];
        setTimeout(function () {
            console.log(`${selectedBeverage} selected`);
            resolve(selectedBeverage);
        }, 1000);
    });
}

function checkIfHotWaterIsReady(isBeverageSelected) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (isBeverageSelected) {
                console.log("Preparing...");
                resolve(isBeverageSelected);
            } else {
                reject("No beverage has been picked up.");
            }
        }, 1000);
    });
}

function prepareDrink(selectedBeverage) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (selectedBeverage) {
                console.log(`Enjoy your ${selectedBeverage} !`);
                resolve(true);
            } else {
                reject("Drink not ready yet...");
            }
        }, 1000);
    });
}

async function asyncAwaitPromiseHandling() {
    const pickedDrink = await pickRandomBeverage();
    const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
    const isDrinkPrepared = await prepareDrink(isHotWaterReady);
    return isDrinkPrepared;
}
asyncAwaitPromiseHandling();

// To handle rejections, we use the try-catch syntax.
// First, the code tries to run and if it fails, the error is caught.
const stock = {
    sunglasses: { quantity: 0, price: 29.99 },
    bags: { quantity: 2, price: 109.99 }
};

const purchasePromise = new Promise(function (resolve, reject) {
    if (stock.sunglasses.quantity > 0) {
        resolve(
            "Sunglasses are available. Proceeding with order now."
        );
    } else {
        reject(
            "Sunglasses are out of stock. Canceling Order."
        );
    }
});

async function orderSunglasses() {
    try {
        let result = await purchasePromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
orderSunglasses();nce