// Usage: node showFirst.js

const getBeers = require('../data')

function getFirstBeer() {
    // TODO: return the first beer object (use `getBeers` for the solution)
    const firstBeer = getBeers();
    return firstBeer[0];
}

if (getFirstBeer()?.name === "Rivet red") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}
