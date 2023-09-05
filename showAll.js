// Usage: node showAll.js

// Feature: Show a list of all beers in a `${name} (${brewery})` format 
// in the console.

const getBeers = require('./data')

function main() {
    const beers = getBeers();

    for(let beer of beers){
        console.log(`Beer: ${beer.name}`)
    }
}

main()

