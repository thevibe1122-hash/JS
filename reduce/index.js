// .reduce() method
// reduces an array to a single value

const prices = [5, 10, 15, 20, 25];

// add all the numbers in the array
const sum = prices.reduce(myFunction);

function myFunction(acumulator, currentValue) {
    return currentValue + acumulator;
}

console.log(sum);

const grades = [89, 67, 52, 99, 86]

const max = grades.reduce(findMax)

function findMax(acumulator, currentValue) {
    return Math.max(acumulator, currentValue);
}

console.log(max);

const min = grades.reduce(findMin)

function findMin(acumulator, currentValue) {
    return Math.min(acumulator, currentValue);
}

console.log(min);