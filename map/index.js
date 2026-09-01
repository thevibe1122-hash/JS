// .map() is a method that is used to create a new array from an existing array. 

const num = [1, 2, 3, 4, 5]

function square(element) {
    return element * element;
}

const squareNum = num.map(square);

console.log(squareNum);

// example of using an anonymous function with map
const squareNum2 = num.map(function (element) {
    return element * element;
});

// example of using an arrow function with map
const squareNum3 = num.map(element => element * element);

console.log(squareNum3);


//another example of map
const prices = [20, 40, 60, 80, 100];

const adjustedPrices = prices.map(price => price * 1.10);

console.log(adjustedPrices);

const name = ["Sujal", "Sandeep", "Priyanshu", "Akash", "Rahul"];

const upperCaseNames = name.map(name => name.toUpperCase());

console.log(upperCaseNames);


const names = [`salah `, `the`, `goat`];

const cap_names = names.map(names => names.charAt(0).toUpperCase() + names.slice(1)
)

console.log(cap_names);