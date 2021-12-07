// Duomenu išvedimo būdai

console.log("JS atskirame faile");

document.getElementById("heading1").innerHTML = "Keiciame elemento turini";

document.write("<h2>Rasome tiesiai i HTML dokumenta</h2>");

//window.alert("ALERT!");

// Statement  - Values, Keywords, Expresions, Comments, Operators

//Kintamieji

var firstName;

firstName = "Petras";
console.log(firstName);

//Pagrindinis naudojamas
let lastName = "Simkunas";

const PI = 3.14159;

//PI = 6;

firstName = "Jonas";
console.log(firstName);

let additionalHeading = "<h1>Title</h1>";

document.write(additionalHeading);

//Duomenu tipai

//String
let string = "tekstas";

//skaiciai
let number = 6;
let number2 = 6.59;

let sum = number + number2;

console.log(sum);

//Boolean

let z = true;


//Operators

//Sudetis (+) Atimtis (-) Daugyba (*) Dalyba (/) Increment (++) Decrement (--)

console.log(string + " " + "papildomas tekstas");

console.log(number + string);

console.log(number*number2/89);

// number = number++;
// console.log(number);

//Assignment operators

// = reiksmei priskirti

let x = 5;

x = x + 10;

x += 10;

// += -= *= /=

// Išvesti h1 į HTML su sakiniu "Mano vardas yra XXXXXX"
// Išvesti h1 į HTML su sakiniu "Mano vardas yra XXXXXX ir man yra YY metų"

let fname = "Jonas";
let age = 15;

document.write("<h1> Mano vardas yra " + fname + "</h1>");
document.write("<h1> Mano vardas yra " + fname + " ir man yra " + age + " metų</h1>");

document.getElementById("heading1").innerHTML = "Mano vardas yra " + fname;

let part1 = "Mano vardas yra";
let space = " ";
let hOpen = "<h1>";
let hClose = "</h1>";

console.log(part1+space+fname);
document.write(hOpen+part1+space+fname+hClose);

// Paskaiciuoti koks bus amzius po x metu;

let years = 30;

console.log(age+years);

document.write(age+years);

let ageAfter = age+years;

let sentence = "Po " + years + " man bus " + ageAfter;

document.write(sentence);
document.getElementById("heading1").innerHTML = sentence;
console.log(sentence);

let a = "15";
let b = 10;
let c = a-b;
console.log(a);
console.log(c);

//Salygos - Conditions

// IF ir SWITCH

if ("salyga") {
    //kodas kuris vykdomas jei salyga yra true;
}

if (age<18) {
    console.log("Access denied");
}

if (years===30){
    console.log("yes");
} else {
    console.log("no");
}

if (b<10) {
    console.log("true");
} else if (b>10) {
    console.log("b yra daugiau uz 10");
} else {
    console.log("b yra lygus 10");
}

