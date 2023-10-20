const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];

    function resolve(result) {
        if (state === PENDING) {
            state = FULFILLED;
            value = result; 
            handlers.forEach(handler => handler(value));
        }
        return;
    }

    function reject(error) {
        if (state === PENDING) {
            state = REJECTED;
            value = error;
            catches.forEach(catchFn => catchFn(value));
        }
        return;
    }

    this.then = function(callback) {
        if (state === FULFILLED) {
            callback(value);
        } else {
            handlers.push(callback);
        }
    }

    executor(resolve, reject);
}

function greet(value) {
    console.log("Hi There", value);
}

const doWork = (res, rej) => {
    setTimeout(() => {
        res("Hello World");
    }, 1000);
}
let someText = new CustomPromise(doWork);
someText.then(console.log)
someText.then(greet);