console.clear();

/** JS Promises are objects that represent the outcome of an asynchronous operation.
 *  A JS promise is like a real-life promise. It can be fulfilled or rejected.
 *  To create a new promise object, we use the new keyword and the promise constructor method.
 *  The constructor takes a function as a parameter.
 *  The passed-in function itself takes two parameters. The first is resolve and the second is reject.
 *  When a promise is fulfilled, we say the promise is resolved. When the promise fails, it's rejected.
 *      const promiseDemo = new promise(function (resolve, reject) { });
 *  If a promise is fulfilled, the .then method helps us handle the result of the promise.
 *  If the promise is not fulfilled, we can use the .catch method to handle errors.
 */

const dessertStock = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

// success 
function orderCheeseCake() {
    return new Promise(function (resolve, reject) {
        if (dessertStock.cheeseCake > 0) {
            resolve (
                "Cheesecake is available in the stock. Order has been processed."
            );
        } else {
            reject(
                "Cheesecake is sold out."
            );
        }
    });
}
function handleCheeseOrderSuccess(successValue) {
    console.log(successValue);
}
const makeCheeseOrder = orderCheeseCake();
makeCheeseOrder.then(handleCheeseOrderSuccess);

// failure
function orderSpongeCake() {
    return new Promise(function (resolve, reject) {
        if (dessertStock.spongeCake > 0) {
            resolve (
                "Sponge cake is available in the stock. Order has been processed."
            );
        } else {
            reject(
                "Sponge cake is sold out."
            );
        }
    });
}
function handleSpongeOrderSuccess(successValue) {
    console.log(successValue);
}
function handleSpongeOrderFailure(failureValue) {
    console.log(failureValue);
}
const makeSpongeOrder = orderSpongeCake();
makeSpongeOrder.then(handleSpongeOrderFailure).catch(handleSpongeOrderFailure);

// sometimes, we need to handle data in a sequential manner. To do so, we can chain .then methods.
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

function isAvailable() {
    return new Promise(function (resolve, reject) {
        if (dessertsStock.cheeseCake.inStockAmount > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

function checkPrice(productAvailable) {
    return new Promise(function (resolve, reject) {
        if (productAvailable && dessertsStock.cheeseCake.price <= budget) {
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

function handleIsAvailable(isAvailable) {
    return checkPrice(isAvailable);
}

function handleCheckPrice(successValue) {
    console.log(successValue);
}

const checkAvailability = isAvailable();
checkAvailability.then(handleIsAvailable).then(handleCheckPrice);
