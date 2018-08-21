// Your code goes here

const MAX = 5;
const MIN_PRIZE = 10;
const ONE = 1;
let start = confirm('Do you want to play a game?');
if(!start) {
    alert('You did not become a millionaire, but can.');
} else {
    startGame(0, MAX, MIN_PRIZE);
}
function startGame(min = 0, max, prize = MIN_PRIZE, totalPrize = 0) {
    let iNum = getRandom(min, max);
    let possiblePrize = prize;
    for(let i = 3; i>0; i--, possiblePrize=Math.floor(possiblePrize/2)) {
        let uNum = prompt(
`Enter your number from ${min} to ${max}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempts ${possiblePrize}$`);
        if(+uNum === iNum && i === 3) {
            totalPrize += possiblePrize;
            if(confirm(`Congratulation!   Your prize is:  $${possiblePrize} Do you want to continue?`)) {
                startGame(min, max*2, prize*2, totalPrize);
                break;
            } else {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
                break;
            }
        } else if(+uNum === iNum && i === 2) {
            possiblePrize = Math.floor(prize/2);
            totalPrize = possiblePrize + totalPrize;
            if(confirm(`Congratulation!   Your prize is:  $${possiblePrize} Do you want to continue?`)) {
                startGame(min, max*2, prize*2, totalPrize);
                break;
            } else {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
            }
        } else if(+uNum === iNum && i === ONE) {
            possiblePrize = Math.floor(prize/4);
            totalPrize = possiblePrize + totalPrize;
            if(confirm(`Congratulation!   Your prize is:  $${possiblePrize} Do you want to continue?`)) {
                startGame(min, max*2, prize*2, totalPrize);
                break;
            } else {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
            }
        } else {
            alert(`Thank you for a game. Your prize is: ${totalPrize}`);
        }
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + ONE)) + min;
}
