const removeFromArray = function(array, ...args) {
    let removed = array.filter(item => !args.includes(item));
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
