// let firstname = "Valp";
// let lastname = "Pinedo";

// switch(firstname) {
//     case 'Victor': {
//         let lastname = "Morgan";
//         break;
//     }
//     case 'Valp': {
//         console.log(lastname);
//         break;
//     }
// }

let person = { firstname: ['Jim', 'John'] };

for (let person of person.firstname) {
    console.log(person);
}