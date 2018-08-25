function isPrime(number) {
    if(typeof number !== 'number' || isNaN(number) || number === null) {
        throw 'Wrong parameter! Should be a number!';
    }
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number !== 1;
}