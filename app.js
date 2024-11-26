let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#compScore");

const DrawGame = () => {
    console.log("game was Drawn");
    msg.innerText = "game was Drawn...Play Again!";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You, win!  Your ${userChoice}  beats  ${compChoice}`;
        msg.style.backgroundColor = "#081b31";
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You, lost! ${compChoice}  beats Your  ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
   
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (compChoice === userChoice) {
        DrawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice); 
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});