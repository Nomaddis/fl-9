// Your code goes here
function calc() {
    let inputAmount = prompt(`Please enter amount of money`);
    let inputDiscount = prompt(`Please enter your discount`);
    if(inputAmount < 0 || inputDiscount < 0 || inputDiscount >= 100 || typeof inputAmount !== 'number'
        || typeof inputDiscount !== 'number' ) {
        console.log(`Invalid data`);
    } else {
        console.log(
            `Price without discount: ${parseFloat(Number(inputAmount).toFixed(2))} 
Discount: ${parseFloat(Number(inputDiscount).toFixed(2))}%
Price with discount: ${parseFloat((inputAmount*(1-inputDiscount/100)).toFixed(2))}
Saved:  ${parseFloat((inputAmount*(inputDiscount/100)).toFixed(2))}`
        );
    }
}
calc();