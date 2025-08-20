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