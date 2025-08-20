// The entire javascript code goes down here

// Creating function to get computer choice

function getComputerChoice() {
    let n = Math.floor(Math.random() * 100);

    if (n <= 33) {
        return 'Rock';
    } else if (n <= 66) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

//  Creating function to get human choice

function getHumanChoice() {
    let select = Number(prompt("Press 1 to select Rock, 2 to select Paper & 3 to select Scissor"));

    if (select === 1) {
        return 'Rock';
    } else if (select === 2) {
        return 'Paper';
    } else if (select === 3) {
        return 'Scissor';
    } else {
        return 'Syntax Error';
    }
}

//  Declaring and initializing variables to denote human and computer score

let humanScore      = 0;
let computerScore   = 0;

//  Creating function to make the human and computer play one round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            computerScore++;
        } else if (computerChoice === 'Scissor') {
            humanScore++;
        } else if (computerChoice === 'Rock') {
            return 'Tie!';
        }
    } else if (humanChoice === 'Paper') {
        if (computerChoice === 'Scissor') {
            computerScore++;
        } else if (computerChoice === 'Rock') {
            humanScore++;
        } else if (computerChoice === 'Paper') {
            return 'Tie!';
        }
    } else if (humanChoice === 'Scissor') {
        if (computerChoice === 'Rock') {
            computerScore++;
        } else if (computerChoice === 'Paper') {
            humanScore++;
        } else if (computerChoice == 'Scissor') {
            return 'Tie!';
        }
    }
}