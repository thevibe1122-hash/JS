// function expression = a function without a name
// anonymous function



const startProgram = function () {
    console.log(`program started`);
}

setTimeout(startProgram, 3000);


const nums = [1, 2, 3, 4, 5, 6]

const squares = nums.map(function (num) {
    return num * num;
});

const cubes = nums.map(function (num) {
    return num * num * num;
});

console.log(cubes);
console.log(squares);

const Even = nums.filter(function (num) {
    return num % 2 === 0;
});

console.log(Even);