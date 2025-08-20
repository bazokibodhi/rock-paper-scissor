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