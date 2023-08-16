const sumAll = function(n1, n2) {
    let sum = 0;
    if (n1 < 0 || n2 < 0 || typeof n2!=='number' || typeof n1!=='number') return 'ERROR';
    for(let i = (n1 < n2? n1: n2); i <= (n2 > n1? n2: n1); i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
