console.log("Hello people");
const button=document.querySelector("button");
button.addEventListener("click", (event) => {
    button.textContent = `Click count: ${event.detail}`;
  });

function game(){
    let playerScore = 0 ;
    let computerScore = 0;

    for(let i=0;i<5;i++){
        const playerSelection = prompt("Choose rock, paper or scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection);
        console.log(result);

        if (result.includes("Win!")){
            playerScore++;
        }else if(result.includes("Lose")){
            computerScore++;
        
    } 

    }
    if(playerScore > computerScore){
        console.log("Congratulations! You win the game.");
    }else if(playerScore < computerScore){
        console.log("Sorry, you lose the game.");
    }else {
        console.log("Its a tie! The game ends in a draw");
    }
}


function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let randomNum=Math.floor(Math.random()*choice.length);
    let computerChoice = choice[randomNum];
    return computerChoice;

};


function playRound(playerSelection, computerSelection){
playerSelection =   playerSelection.toLowerCase();

if (playerSelection === computerSelection){
    return "It's a tie";
}else if (
    (playerSelection === "rock" && computerSelection ==="scissors")||
    (playerSelection === "paper" && computerSelection ==="rock")||
    (playerSelection === "scissors" && computerSelection ==="paper")
){
    return "You win! " + playerSelection + " beats " + computerSelection;
    }else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    
}

game();