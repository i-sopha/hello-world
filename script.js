let userName = prompt("What is your name?");
console.log(userName);
let userChoice = prompt("Do you like legos " + userName + "?");
console.log(userChoice);

if (userName == "") {
    userName = "Stranger";
};

if (userChoice == "yes" || userChoice == "yea" || userChoice == "sure") {
    greeting = "You're in for a treat!";
}   else if (userChoice == "no" || userChoice == "nah" || userChoice == "nope") {
    greeting = "Well here is my personal collections page anyway!";
}   else {
    greeting = "I'm not sure what you mean.";
};

let lego2 = document.getElementById("lego");
console.log(lego2);
lego2.textContent = "Hello " + userName + "! \r\n" ;
lego2.textContent += greeting;

let legoElm = document.getElementById("legos2");
console.log(legoElm);
legoElm.textContent = "This is my personal lego collections page. Enjoy!";

let lego3 = document.getElementById("legos2");
console.log(lego3);
legoElm.textContent = "Thanks for visiting my page, " + userName  + "! Have a good day.";