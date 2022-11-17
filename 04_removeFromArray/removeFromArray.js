const removeFromArray = function(array) {
// @ts-check

let outputArray=array;
for (let i = 1; i <= arguments.length; i++) { // starts with the 2nd arg because 1st arg is the array
    if (outputArray.indexOf(arguments[i]) >= 0){
        outputArray.splice(outputArray.indexOf(arguments[i]),1);
    }
}
return outputArray;
};
// Do not edit below this line
module.exports = removeFromArray;
