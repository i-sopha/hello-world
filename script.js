function someQuestions() {
    let userName = prompt("What is your name?");
    console.log(userName);
    if (userName == "") {
        userName = alert("❗❌❗Stranger Danger❗❌❗");
        userName = prompt("Try Again. What is your name?");
        userName = "Stranger";
    }
    document.write("Hello " + userName + "! \r\n");
    return userName;
};


function greeting() {
    let userName = someQuestions();
    let userChoice = prompt("Do you like legos " + userName + "?");
    let personalGreet = "";
    console.log(userChoice);
    if (userChoice == "yes" || userChoice == "yea" || userChoice == "sure") {
        personalGreet = document.write("You're in for a treat!");
        console.log("Hello");
    } else if (userChoice == "no" || userChoice == "nah" || userChoice == "nope") {
        personalGreet = document.write("Well here is my personal collections page anyway!");
    } else {
        personalGreet = document.write("I'm not sure what you mean but everyone likes legos.");
    }
    document.write(" Thanks for visiting my page, " + userName + "! Have a good day.");
    return personalGreet;
};







// function goodbye() {
//     let goodbyeMsg = someQuestions();
//     let goodbyeMsg = document.write(" Thanks for visiting my page, " + userName + "! Have a good day.");
// };

// greeting();


// someQuestions();

// let legoElm = document.getElementById("legos2");
// console.log(legoElm);
// legoElm.textContent = "This is my personal lego collections page. Enjoy!";

// let lego3 = document.getElementById("legos2");
// console.log(lego3);
// legoElm.textContent = "Thanks for visiting my page, " + userName  + "! Have a good day.";