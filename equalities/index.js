//  = is assignment operator
//  == is equality operator (checks value only)
//  === is strict equality (checks value and type)
// != is inequality operator (not equal values)
// !== is strict inequality (not equal or not same type)

const heading = document.getElementById("myheading");
const myparagraph = document.getElementById("myp");

let x = `10`;
let y = 10;

heading.textContent = x == y; // true
myparagraph.textContent = x === y; //false