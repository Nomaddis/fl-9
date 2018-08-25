function reverseNumber(number) {
    let stringNumber = number + '';
    return parseInt(stringNumber.split('').reverse().join(''));
}