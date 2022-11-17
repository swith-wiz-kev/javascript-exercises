const reverseString = function(stringToReverse) {
    let stringOutput = "";
    for (let i = 1; i <= stringToReverse.length; i++) {
        const indexReverse = stringToReverse.length - i;
        stringOutput += stringToReverse.slice(indexReverse,indexReverse+1);
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = reverseString;
