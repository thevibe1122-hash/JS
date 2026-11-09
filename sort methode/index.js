//sort() = methode to sort the array in ascending order as strings by default

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a,b) => b - a); //sorts the array in descending order
console.log(numbers);

const people = [{name: `sponge`,age:20,GPA:3.2}, 
                {name: `patrick`,age:23,GPA:1.2}, 
                {name: `sandy`,age:21,GPA:4.0}, 
                {name: `crabs`,age:44,GPA:2.2}];

people.sort((a,b) => b.GPA - a.GPA); //sorts the array in descending order based on GPA

console.log(`\nSorted by GPA:`);

people.forEach((person) => {
    console.log(`${person.name} : ${(person.GPA).toFixed(1)}`);
})

people.sort((a,b) => a.age - b.age); //sorts the array in ascending order based on age

console.log(`\nSorted by Age:`);

people.forEach((person) => {
    console.log(`${person.name} : ${person.age}`);
})

people.sort((a,b) => a.name.localeCompare(b.name)); //sorts the array in ascending order based on name

console.log(`\nSorted by Name:`);

people.forEach((person) => {
    console.log(`${person.name} : ${person.age}`);
})


