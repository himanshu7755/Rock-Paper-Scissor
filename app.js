let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePeran = document.querySelector("#user-score");
let compScorePeran = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["ROCK", "PAPER", "SCISSOR"];
    let randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "GAME WAS DRAW / PLAY AGAIN"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++,
        userScorePeran.innerText = userScore;
        msg.innerText = `YOU WIN! YOUR ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#fff"
    }else{
        compScore++,
        compScorePeran.innerText = compScore;
        msg.innerText = `YOU LOSS. ${compChoice} BEATS YOUR${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#fff"
    }
};


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);
    //generate computer choice -> modular

    if(userChoice === compChoice){
       drawGame();
        //darw game
    } else{
        let userWin = true;
        if(userChoice === "ROCK"){
            //scissor, paper
            userWin = compChoice === "PAPER"? false : true;
        } else if(userChoice === "PAPER"){
            //rock. scissor
            userWin = compChoice === "SCISSOR" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "ROCK" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

