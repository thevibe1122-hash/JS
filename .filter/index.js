// .filter()  method
// creates a new array with all elements that pass the test implemented by the provided function


const ages = [18, 19, 12, 13, 13, 14, 119]

function isAdult(age) {
    return age >= 18;
}

function child(age) {
    return age < 18;
}

const adults = ages.filter(isAdult);
const minors = ages.filter(child);
console.log(adults);
console.log(minors);
