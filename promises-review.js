const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
    let state = PENDING;
    let futureValue = null;
    let callBacks = []; // callback list
    let catches = [];

    function resolve(result) {
        if (state === PENDING) {
            state = FULFILLED;
            futureValue = result;
            callBacks.forEach(callBack => callBack(futureValue));
        }
        return;
    }

    function reject(error) {
        if (state === PENDING) {
            state = REJECTED;
            futureValue = error;
            catches.forEach(catchFn => catchFn(futureValue));
        }
        return;
    }

    this.then = function (callBack) {
        if (state === FULFILLED) {
            callBack(futureValue);
        } else {
            callBacks.push(callBack);
        }
    }

    executor(resolve, reject);
}