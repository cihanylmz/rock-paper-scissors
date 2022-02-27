//create a function to make the computer choose randomly
function computerPlay() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

//make a function "eval" that takes two signs and decides the winner
function eval_winner(first_sign, second_sign) {
    if (first_sign === second_sign) return null;
    if (first_sign === "rock" && second_sign === "paper") return second_sign;
    if (first_sign === "paper" && second_sign === "rock") return first_sign;
    if (first_sign === "scissors" && second_sign === "rock") return second_sign;
    if (first_sign === "rock" && second_sign === "scissors") return first_sign;
    if (first_sign === "scissors" && second_sign === "paper") return first_sign;
    if (first_sign === "paper" && second_sign === "scissors") return second_sign;
}

//make a function to emulate a round of play
function roundOfPlay() {
    //make the computer choose
    let computerChoice = computerPlay();
    console.log("Computer's choice: " + computerChoice);

    //make the human choose
    let userChoice = prompt("Please enter your choice: ").toLowerCase();
    console.log("Human's choice: " + userChoice);

    //use "eval" function to evaluate the winner
    let winner = eval_winner(computerChoice, userChoice);

    if(winner)
    {
        if (winner === userChoice) console.log("Human won!");
        else console.log("The machines won!");
    }
    else console.log("Draw");
}

function game() {
    for (let i = 0; i < 5; i++) {
        roundOfPlay();
    }
}

game();