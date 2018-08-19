// Your code goes here
let start = confirm('Do you want to play a game?');
if(!start) {
    alert('You did not become a millionaire, but can.');
} else {
    startGame(0, 5, 10);
}
let totalPrize = 0;

function startGame(min = 0, max, prize = 10, totalPrize = 0) {
    let iNum = getRandom(min, max);
    console.log(iNum);
    var possiblePrize = prize;
    for(let i = 3; i>0; i--) {
        console.log(possiblePrize + "poss before");
        let uNum = prompt(`Enter your number from ${min} to ${max}
         Attempts left: ${i}
         Total prize: ${totalPrize}$
         Possible prize on current attempts ${possiblePrize}$
        `);
        if(+uNum === iNum && i === 3) {
            totalPrize += possiblePrize;
            alert(`Congratulation!   Your prize is:  $${possiblePrize}`);
            startGame(min, max*2, prize*2, totalPrize);
            break;
        } else if(+uNum === iNum && i === 2) {
            possiblePrize = Math.floor(prize/2);
            totalPrize = possiblePrize + totalPrize;
            alert(`Congratulation!   Your prize is:  $${possiblePrize}`);
            startGame(min, max*2, prize*2, totalPrize);
            break;
        } else if(+uNum === iNum && i === 1) {
            possiblePrize = Math.floor(prize/2);
            totalPrize = possiblePrize + totalPrize;
            alert(`Congratulation!   Your prize is:  $${possiblePrize}`);
            startGame(min, max*2, prize*2, totalPrize);
            break;
        } else {
            alert(`Thank you for a game. Your prize is: ${totalPrize}`);
        }
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}
