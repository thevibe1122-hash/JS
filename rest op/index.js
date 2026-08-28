// rest perameter = (...rest) allow a function to accept multiple parameters as an array

const food1 = ` pizza`
const food2 = ` sushi`
const food3 = ` kebab`
const food4 = ` burger`
const food5 = ` ramon`

function OpenFridge(...foods) {
    console.log(...foods);
}

OpenFridge(food1, food2, food3, food4, food5);

function getFood(...foods) {
    return foods
}

const foods = getFood(food1, food2, food3, food4, food5, `boobs`)

function sum(...params) {
    let result = 0
    for (const key of params) {
        result += key
    }
    console.log(`The sum of ${params} is ${result}`);
}

sum(10, 20, 30, 40, 50);


function Comb_str(...strings) {

    console.log(...strings);
}

Comb_str(`boobs`, `boobs`, `boobs`, `booobuies`)