// spread operator = ... , is used to spread the elements of an array or object

let num = [1, 2, 3, 4, 5]
console.log(num);
console.log(...num);

console.log(Math.max(...num));
console.log(Math.min(...num));

let first = [1, 2, 3];
let second = [4, 5, 6];

let combinearray = [...first, ...second];
console.log(combinearray);


let word = `buyakasha`

let letter = [...word].join(`-`);
console.log(letter);

let person1 = { name: `Aybars`, age: 22, };
let person2 = { job: `Student`, city: `Tashkent`, };

let combined = { ...person1, ...person2 };
console.log(combined);