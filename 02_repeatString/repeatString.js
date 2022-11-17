const repeatString = function(string,num) {
    let outputString ="";
    if (num < 0) {
        outputString ="ERROR"        
    }
    for (let index = 0; index < num; index++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
