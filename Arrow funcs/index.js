// arrow functions is a shorter way to write function expressions
// use => syntax






const hello = () => { console.log(`hello`) }
hello();

const addNum = (x, y) => { return x + y }
console.log(addNum(1, 2));

setTimeout(() => { console.log(`hello`) }, 2000);

const num = [1, 4, 2, 3, 5]

const squar = num.map((num) => num * num)
const even = num.filter((num) => num % 2 === 0)
const total = num.reduce((sum, num) => sum + num, 0)
console.log(squar);
console.log(even);
console.log(total);

