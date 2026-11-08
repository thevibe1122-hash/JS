//destructuring = extracting values from objects or 
//                arrays and assigning them to variables
//                [] = array destructuring
//                {} = object destructuring

// --------------EXAMPLE 1-------------------
// SWAP THE VALUES OF TWO VARIABLES USING DESTRUCTURING

let a = 1
let c = 2;

[a,c] = [c,a] // c = 1 and a = 2

// --------------EXAMPLE 2-------------------
// SWAP POSITION IN ARRAY

const numbers = [1,2,3,4,5];

// swap the first and last elements
[numbers[0], numbers[numbers.length - 1]] = [numbers[numbers.length - 1], numbers[0]] 
// numbers = [5,2,3,4,1]

// --------------EXAMPLE 3-------------------
// Assign array values to variables

const names = ['John', 'Jane', 'Doe']
const [firstName, secondName, thirdName] = names
console.log(firstName) // John

// --------------EXAMPLE 3-------------------
// Extracting values from objects

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    }
};

// Extract values from the person object
const { name, age, address } = person;
console.log(name); // John Doe
console.log(age); // 30
console.log(address); // { street: '123 Main St', city: 'New York', zipCode: '10001' }

// --------------EXAMPLE 4-------------------
// destructur in function parameters

function printPerson({ name, age, address: { city } }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

printPerson(person); // Name: John Doe, Age: 30, City: New York