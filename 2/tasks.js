// Usage: node tasks.js

//-------------------------------------------------------------------------
// Task 1: getTargetBeer() should return the `name` of the first beer.
// Task 2: getTargetBeer() should return the `brewery` of the first beer.
//-------------------------------------------------------------------------
//asd
const getBeers = require('../data')

function getTargetBeer(asd) {
    // TODO: see task above (one person should only solve one of the tasks)

    if('brewery' === asd){
        return getBeers()[0].brewery;
    } else{
        return getBeers()[0].name
    }
}

console.log(getTargetBeer())
