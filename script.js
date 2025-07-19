let userScore=0;
let computerScore=0;

const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("comp-score");

const choices = document.querySelectorAll('.choice');

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        msg.innerText = `You Lost. Your ${userChoice} loses to ${compChoice}`; 
        computerScorePara.innerText = computerScore;
        msg.style.backgroundColor = "red";  
    }
}

const genCompChoice= ()=>{
    let options=["rock", "paper", "scissors"];
    const randidx= Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = ()=>{
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

document.getElementById("new-game").addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "New game started! Make your move.";
    msg.style.backgroundColor = "#081b31";
});