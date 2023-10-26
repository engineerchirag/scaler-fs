// Q1: Build your custom myFilter function
// which can be call on any array



console.log([1,2,3,4].myFilter((value) => value % 2 === 0));
[1,2,3,4].myFilter((value) => value > 3);
[1,2,3,4].myFilter((value) => value % 3 === 0);
[1,2,3,4].myFilter((value, idx, arr) => value % 5 === 0);


Array.prototype.myFilter = function (cb) {
    // iterate
    // check condition
    // create new array
    // push things in new array which passes condition
    // return the new array

    const filteredValues = [];
    for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            filteredValues.push(this[i]);
        }
    }

    return filteredValues;

}

