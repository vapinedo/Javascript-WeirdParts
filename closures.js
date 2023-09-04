// function greet(whattosay) {
//     return function(name) {
//         console.log(whattosay + " " + name);
//     }
// }

// var sayHi = greet("Hello");
// sayHi("Victor");

function buildFunctions() {
    var arr = [];

    for (var i=0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            } 
        );
    }

    return arr;
}

// var fs = buildFunctions();
// fs.map(x => x());

function buildFunctions2() {
    var arr = [];

    for (var i=0; i < 3; i++) {
        arr.push(
            (function(x) {
                return function() {
                    console.log(x);
                }
            }(i))
        );
    }

    return arr;
}

var fs = buildFunctions2();
fs.map(x => x());