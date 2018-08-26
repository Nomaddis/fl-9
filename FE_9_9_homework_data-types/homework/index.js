function findType(param) {
    return typeof param;
}
// console.log(findType('number'));


function showFormattedDate(date) {
    const MONTHS = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    };
    console.log(`It is ${date.getDate()} of ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`);
    // return `It is ${date.getDate()} of Aug, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2018-08-27T01:10:00'));
