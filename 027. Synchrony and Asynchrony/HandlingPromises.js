console.clear();
// even if we chain many .then methods, we can still add the .catch method to handle any rejections.
const dessertsStock = {
    cheeseCake: {
        inStockAmount: 10,
        price: 5
    },
    spongeCake: {
        inStockAmount: 0,
        price: 7
    }
};
const budget = 10;

function isSpongeAvailable() {
    return new Promise(function (resolve, reject) {
        if (dessertsStock.spongeCake.inStockAmount > 0) {
            resolve(true);
        } else {
            reject("The sponge cake is out of stock.. Canceling the order..");
        }
    });
}

function checkPrice(spongeAvailable) {
    return new Promise(function (resolve, reject) {
        if (spongeAvailable && dessertsStock.spongeCake.price <= budget) {
            resolve(
                "Reasonable price. Purchasing.."
            );
        } else {
            reject(
                "Too expensive. Canceling the order.."
            );
        }
    });
}

function handleIsSpongeAvailable(isAvailable) {
    return checkPrice(isAvailable);
}

function handleSpongeCheckPrice(successValue, failureValue) {
    console.log(successValue);
}

function handleSpongeFailure(failureValue) {
    console.log(failureValue);
}

const checkSpongeAvailablity = isSpongeAvailable();
checkSpongeAvailablity
    .then(handleIsSpongeAvailable)
    .then(handleSpongeCheckPrice)
    .catch(handleSpongeFailure);
