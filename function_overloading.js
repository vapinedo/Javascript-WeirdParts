function greet(firstname, lastname, language) {
    language = language || "English";

    if (language === "English") {
        console.log("Hello " + firstname + " " + lastname);
    }
    if (language === "Spanish") {
        console.log("Hola " + firstname + " " + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "English");
}

greet("Victor", "Pinedo", "Spanish");
greetEnglish("Victor", "Pinedo");