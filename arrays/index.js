let fruits = ["apple", "banana", "orange", "mango"];
let fruits2 = ["kiwi", "papaya"];

for (const key in fruits) {
    console.log(fruits[key]);
}

// .push() is used to add a value to the end of an array
fruits.push(`papaya`) //  ["apple", "banana", "orange", "mango", "papaya"];

// .pop() is used to remove a value from the end of an array
fruits.pop() // ["apple", "banana", "orange", "mango"];

// .unshift() is used to add a value to the beginning of an array
fruits.unshift(`watermelon`) // ["watermelon", "apple", "banana", "orange", "mango"];

// .shift() is used to remove a value from the beginning of an array
fruits.shift() // ["apple", "banana", "orange", "mango"]

// .length is used to find the number of elements in an array
console.log(fruits
    .length); // 4

// .slice(star, end) is used to return a shallow copy of a portion of an array
console.log(fruits
    .slice(1, 3)); // ["banana", "orange"]

// .splice(start, delete, item, item...) is used to add or remove items from an array
// here we are removing 2 elements starting from index 1 and adding "banana" and "orange" to the array
fruits.splice(1, 2, "banana", "orange"); // ["apple", "banana", "orange", "mango"]

// .indexOf(item) is used to find the index of the first occurrence of an element in an array
console.log(fruits
    .indexOf("banana")); // 1

// .lastIndexOf(item) is used to find the index of the last occurrence of an element in an array
console.log(fruits
    .lastIndexOf("banana")); // 1

// .includes(item) is used to check if an element exists in an array
console.log(fruits
    .includes("banana")); // true

// .reverse() is used to reverse the order of elements in an array
console.log(fruits
    .reverse()); // ["mango", "orange", "banana", "apple"]

// .sort() is used to sort the elements of an array in ascending order
console.log(fruits
    .sort()); // ["apple", "banana", "mango", "orange"]

// .join(separator) is used to join the elements of an array into a string
console.log(fruits
    .join(", ")); // "apple, banana, orange, mango"

// .concat(array1, array2, ...) is used to join two or more arrays
console.log(fruits
    .concat(fruits2)); // ["apple", "banana", "orange", "mango", "kiwi", "papaya"]

// .forEach() is used to iterate over the elements of an array
fruits.forEach(myFunction);

function myFunction(value, index) {
    console.log(value, index);
}

// .map(callback(currentValue [, index [, array]]) [, thisArg])
// returns a new array with the results of calling a provided function on every element in the calling array.
// here we are multiplying each element by 2
console.log(fruits
    .map(myFunction));

function myFunction(value) {
    return value + "s";
}

// .filter(callback(element[, index[, array]])[, thisArg])
// filters the elements of an array that pass a test provided by a function. It returns a new array containing only the elements that pass the test.
console.log(fruits
    .filter(myFunction));

function myFunction(v) {
    return v === "s";
}

// .reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// reduces the elements of an array to a single value.
console.log(fruits
    .reduce(myFunction));

function myFunction(value, index) {
    return value + ` ` + index;
}

// .at() is used to return the element at a specific index
console.log(fruits.at(1)); // "banana"

