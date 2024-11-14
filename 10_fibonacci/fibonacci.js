const fibonacci = function(number) {
    var initNum = 1;
    var fibNum = 0;
    for(let i=0; i < number; i++){
        fibNum += initNum;
    }
    
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
