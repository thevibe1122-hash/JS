import { random } from "./random.js";

const array = [`book`,`coffee`,`food`,`latte`,`bored`]

let num = random.randint(3)
let arr1 = random.choice(array)
let arr2 = random.choices(array,2)


console.log(num)
console.log(arr1)
console.log(arr2)