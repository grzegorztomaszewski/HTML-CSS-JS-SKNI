

var firstName = "Ania";
var lastName;

let PI = 3.14;
PI = PI +3;

console.log(PI);

console.log(typeof firstName);
console.log(firstName.toUpperCase());
// firstName = 23;

/*
Typy zmiennych"
1. string
2. number
3. undefined
4. null
5. symbol
6. boolean
*/

//NaN

var age = 23;
console.log(typeof age);
console.log(lastName);
console.log(12 / 2);
var isRaining = true;

function sayHello(name ) {
    console.log("Hello " + name);
    return name + "!";
} 

sayHello("Ania");
var newName = sayHello("Ania");
console.log(newName);

function goodbye(name, lastname) {
    console.log("Goodbye " + name + " " + lastname)
}

goodbye("Ania", "Kujawa");


const sayHi = function() {

}


age = 18

if(age >= 18) {
    console.log("Jesteś pelnletny!")
} else {
    console.log("Nie Jesteś pelnletny")
}

age = 25

if(age === 24) {
    console.log("Masz 24 lata!");
} else if (age === 25) {
    console.log("masz 25 lat!");
} else {
    console.log("Nie ma 24 lata");
}

console.log(`Helo word ${age}`);

const mainHeader = document.getElementById("main-header");
console.log(mainHeader)

document.getElementById("main-header").addEventListener("click", function(event) {
    console.log(event);
    console.log("Click!");
});

let person = {
    "name": "Tomek",
    "surname": "Świrski",
    "age": 20
};

console.log(person.age);

console.log("*");
console.log("**");
console.log("***");

let tree = "*";
for(let i = 0; i < 10; i++) {
    tree += "*";
    console.log(tree);
}

// for(let i = 9; i > 0; i--) {
//     console.log(i);
// }

// OBECNOSC
tinyurl.com/js03was