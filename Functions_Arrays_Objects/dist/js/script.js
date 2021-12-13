console.log("test");

//Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka.

let a;
let b;
let c;
let d;
let e;
let f;

//a = Math.random();
a = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded

// Math.floor(Math.random()*(9999-1000+1))+1000; Both included
console.log(a);

b = Math.floor(Math.random()*(9999-1000))+1000;
console.log(b);

c = Math.floor(Math.random()*(9999-1000))+1000;
console.log(c);

d = Math.floor(Math.random()*(9999-1000))+1000;
console.log(d);

e = Math.floor(Math.random()*(9999-1000))+1000;
console.log(e);

f = Math.floor(Math.random()*(9999-1000))+1000;
console.log(f);

console.log("------------------------------------------");


//1 ciklas
if (a>b){
    let x = a;
    a = b;
    b = x;
} 
//console.log("test"+b);
if(b>c) {
    let x = b;
    b = c;
    c = x;
} 
//console.log("test"+b);
if (c>d){
    let x = c;
    c = d;
    d = x;
}

if (d>e){
    let x = d;
    d = e;
    e = x;
}

if (e>f){
    let x = e;
    e = f;
    f = x;
}

//2 ciklas
if (a>b){
    let x = a;
    a = b;
    b = x;
} 
//console.log("test"+b);
if(b>c) {
    let x = b;
    b = c;
    c = x;
} 
//console.log("test"+b);
if (c>d){
    let x = c;
    c = d;
    d = x;
}

if (d>e){
    let x = d;
    d = e;
    e = x;
}

//3 ciklas
if (a>b){
    let x = a;
    a = b;
    b = x;
} 
//console.log("test"+b);
if(b>c) {
    let x = b;
    b = c;
    c = x;
} 
//console.log("test"+b);
if (c>d){
    let x = c;
    c = d;
    d = x;
}

//4 Ciklas

if (a>b){
    let x = a;
    a = b;
    b = x;
} 
//console.log("test"+b);
if(b>c) {
    let x = b;
    b = c;
    c = x;
} 

//5 Ciklas

if (a>b){
    let x = a;
    a = b;
    b = x;
} 


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log("**********************************************");
// Funkcijos

//Tai yra kodo blokas, kuri vykdo tam tikra uzduoti, ir kuri galima iskviesti kada norime.

function multiply(a, b){
    console.log(a*b);
}

multiply(11,2);

function greeting(){
    console.log("Hello, "+firstName);
}

let firstName = "Marius";

function sum(a, b){
    return a+b;
    //toliau kodas neveikia
}

let suma = sum(25,56);

let skaicius1 = 78;
let skaicius2 = 896;

console.log("Suma yra "+sum(skaicius1,skaicius2));

// for creating heading, where a is size and b is text

function createHeading(a, b){
    document.write("<h"+a+">"+b+"</h"+a+">");
}

createHeading(5, 15);

// function createHeading(a, b){
//     return "<h"+a+">"+b+"</h"+a+">";
// }

// document.write(createHeading(3, "Funkcija su return"));

function createHeadingV2() {
    let a;
    let b;
    a = parseInt(window.prompt("iveskite Heading dydi"));
    b = window.prompt("iveskite pavadinimo teksta");

    document.write("<h"+a+">"+b+"</h"+a+">");
}

////Masyvai - Arrays

const trees = [
    "Pusis", 
    "Berzas", 
    "Azuolas"
];
// let tree1 = "Pusis";
// let tree2 = "Berzas";
// let tree3 = "Azuolas";
const cars = [];
cars[0] = "BMW";
cars[1] = "Opel";
cars[2] = "Audi";
console.log(trees);
console.log(cars);
cars[2] = "Skoda";
console.log(cars);

let bestCar = cars[2];
console.log(bestCar);

console.log(typeof trees);

//Objektai - Objects

const student = {
    firstname:"Jonas",
    lastname:"Jonaitis",
    age:23
}

console.log(student.lastname);

student.firstname = "Petras";
console.log(student);

//Array Methods

const furniture = [
    "stalas",
    "kede",
    "fotelis",
    "lova"
]

console.log(furniture);

console.log(furniture.toString());
console.log(furniture.join(" | "));

let bed = furniture.pop();
console.log(furniture);
console.log(bed);

furniture.push("sofa");
console.log(furniture);

furniture.shift();
furniture.unshift("spintele");

console.log(furniture.length); //paskutinis indeksas yra 1 mazesnis uz length

delete furniture[2];
console.log(furniture);


