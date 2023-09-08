// function sayHiLater() {
//     var greeting = "Hi!";
//     setTimeout(() => {
//         console.log(greeting);
//     }, 3000);
// }

// sayHiLater();

var callBackFn = () => {
    console.log("I'm the callBack function");
}

// A call back
function tellMeWhenDone(callBack) {
    console.log("I've done");
    console.log(("Waiting for callBack ..."));
    setTimeout(() => {
        callBack();
    }, 3000);
};
tellMeWhenDone(callBackFn);