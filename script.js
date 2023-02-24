function someQuestions() {
    let userName = "";
    console.log(userName);
    while (userName === "") {
        userName = prompt("What is your name?");
        if (userName == "") {
            alert("❗❌❗Stranger Danger❗❌❗");
            alert("Try Again.");
        }

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


function pickNum() {
    let userPick = parseInt(prompt("What would you rate your lego building skills? Pick a number between 1-5"));
    console.log(userPick);
    // let myNum = 6;
    if (userPick > 5) {
        alert("I said pick a number between 1-5.")
        pickNum()
    } else {
        for (let i = 0; i < userPick; i++) {
            document.write('<img src="./images/mariolegostar.png">');
        }

    }
};



// else if (userPick === "") {
//     alert("Please choose a number")
//     pickNum()
// }







// function someQuestions() {
//     let userName = prompt("What is your name?");
//     console.log(userName);
//     if (userName == "") {
//         userName = alert("❗❌❗Stranger Danger❗❌❗");
//         userName = prompt("Try Again. What is your name?");
//         document.write("Hello " + userName + "! \r\n");
//         return userName;
//         };





// let myNum = 5;

// for (let i = 0; i < myNum; i++){
//     document.write('<img src="./lego.png">')
// }



// lastQuestion() {
//     let userChoice = prompt("Pick a number between 1-5");
// }




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