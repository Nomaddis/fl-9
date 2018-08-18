// Your code goes here
let firstLength = prompt(`Please enter first length of sides `);
let secondLength = prompt(`Please enter second length of sides `);
let angle = prompt(`Please enter angle.`);
function findLength(a, b, angle) {
    const DEFAULT_ANGLE = 180;
    let c;
    let perimeter;
    let p;
    let square;
    a = Number(a);
    b = Number(b);
    angle = Number(angle);
    if(a <= 0 || b <= 0 || angle <=0 || typeof a !== 'number'
        || typeof b !== 'number' || typeof angle !== 'number' || isNaN(a)
        || isNaN(b) || isNaN(angle) ) {
        console.log('Invalid data');
    } else {
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle * Math.PI / DEFAULT_ANGLE));
        perimeter = a + b + c;
        p = perimeter / 2;
        square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        console.log(
            `c length: ${parseFloat(c.toFixed(2))} 
Triangle square: ${parseFloat(square.toFixed(2))}
Triangle perimeter: ${parseFloat(perimeter.toFixed(2))}`
        )
    }
}
findLength(firstLength, secondLength, angle);