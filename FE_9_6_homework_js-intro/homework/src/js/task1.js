// Your code goes here
//TODO round 0.00 = > 0
function calc() {
    let inputAmount = prompt(`Please enter amount of money`);
    let inputDiscount = prompt(`Please enter your discount`);
    if(inputAmount < 0 || inputDiscount < 0) {
        console.log(`Invalid data`);
    } else {
        console.log(
            `Price without discount: ${Number(inputAmount).toFixed(2)} 
Discount: ${Number(inputDiscount).toFixed(2)}%
Price with discount: ${(inputAmount*(1-inputDiscount/100)).toFixed(2)}
Saved:  ${(inputAmount*(inputDiscount/100)).toFixed(2)}`
        );
    }
}
calc();