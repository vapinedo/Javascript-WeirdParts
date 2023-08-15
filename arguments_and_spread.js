function greet(firstname, lastname, language, ...otherParams) {

    if (arguments.length === 0) {
        console.log("You need to pass some arguments to this function");
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(...otherParams);
    console.log(arguments);
    console.log("------");
}
greet();
greet("Victor");
greet("Victor", "Pinedo");
greet("Victor", "Pinedo", "Spanish");
greet("Victor", "Pinedo", "Spanish", 33);