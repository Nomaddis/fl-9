const TESTNUMBER1 = 2;
const TESTNUMBER2 = 3;
const TESTNUMBER3 = 8;
const TEST_ARR = [TESTNUMBER1, TESTNUMBER2, TESTNUMBER3];
//Task 1
function findType(param) {
    return typeof param;
}

//Task 2
function forEach(array, callBackFunction) {
    for (let i = 0; i < array.length; i++) {
        callBackFunction(array[i]);
    }
}

//Task 3
function map(array, callBackFunction) {
    let newArray = [];
    forEach(array, function(el) {
        newArray.push(callBackFunction(el))
    });
    return newArray;
}

//Task 4
function filter(array, callBackFunction) {
    let newArray = [];
    forEach(array, function(el) {
        if (callBackFunction(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}

//Task 5
const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];
function getAdultAppleLovers (data) {
    let filteredData = filter(data, function(human) {
        return human.age >= 18 && human.favoriteFruit === 'apple';
    });
    return map(filteredData, function(human) {
        return human.name;
    });
}
// console.log(getAdultAppleLovers(data));

//Task 6
function keys(obj) {
    let objKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objKeys.push(key);
        }
    }
    return objKeys;
}
const obj = {
        keyOne: 1,
        keyTwo: 2,
        keyThree: 3
    };

//Task 7
function values(obj) {
    let objValues = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objValues.push(obj[key]);
        }
    }
    return objValues;
}

//Task 8
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
    return `It is ${date.getDate()} of ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}
