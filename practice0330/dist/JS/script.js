console.log("test");

// document.getElementByClassName("main").style.color = "green";

// 1 Tamsiai žaliai nuspalvinti h1 tagą;
 document.getElementById("h1-color").addEventListener("click",function (){ 
    
    const elemh1 = document.getElementsByTagName("h1");
    elemh1[0].style.color="green";
});

// 2 Tagui i pridėti klasę small;
document.getElementById("h1-font").addEventListener("click",function (){ 
    
    const collection = document.getElementsByTagName("i");
    collection[0].classList.add('small');
   
});

// 3 Iš tago h1 pašalinti klasę main;


const elementh1 = document.getElementsByTagName("h1");
elementh1[0].classList.remove("main");

// 4 Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;

const coll = document.getElementsByTagName("h2");
coll[0].classList.remove("main");
coll[0].classList.add('first');

// 5 Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

const element5 = document.getElementsByTagName("span");
element5[0].style.fontSize="10px";
element5[0].style.color="grey";

// 6 Suskaičiuoti kiek yra h2 tagų;
 


