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

//Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.

let n = 0;

if(n<0){
    console.log("Blogas");
} else if (n===0) {
    console.log("Geras");
} else {
    console.log("skaicius yra 0");
}


//Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.

// 1 - Eiti +
// 2 - Palaukite +
// 3 - Stop
let light;

light = 8;

if(light===1){
    console.log("Eiti");
} else if (light===2) {
    console.log("Palaukite");
} else if (light===3) {
    console.log("Stop");
} else {
    console.log("Toks pasirinkimas neegzistuoja");
}

//Loterijos bilietą sudaro šešiaženklis numeris. Loterijoje laimi tas bilietas, kurio numeris dalosi iš 4. Nustatykite, ar loterijos bilietas n yra laimingas?


let ticket = 123456;

let remainder = ticket%4;

console.log(remainder);

if((ticket%4)===0){
    console.log("Bilietas laimingas");
} else {
    console.log("Bilietas nelaimingas");
}