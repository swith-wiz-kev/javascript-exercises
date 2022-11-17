const sumAll = function(a,b) {
// @ts-check
    function isnotValid(input){
        return (Number.isInteger(input) && input>=0)? false : true;
    }
    if (isnotValid(a) || isnotValid(b)) {
        return 'ERROR';
    } else {
        let output = 0;
        for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
            output+=i;
        }
        return output;
    }
};
// Do not edit below this line
module.exports = sumAll;
