const fruits =[{name:`Apple`,color: `red`, colories: 95},
               {name:`Orange`,color: `orange`, colories: 45},
               {name:`Banana`,color: `yello`, colories: 105},
               {name:`coconut`,color: `brown`, colories: 195},
               {name:`pinapple`,color: `yellow`, colories: 25},
               {name:`Mango`,color: `orange`, colories: 225}]


fruits.push({name:`Grapes`, color:`purple`, colories: 62})
fruits.pop()
fruits.slice(1, 3)

const fruit_names = fruits.map((fruit) => fruit.name)
const fruit_colors = fruits.map((fruit) => fruit.color)

fruits.forEach((fruit) => 
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Calories: ${fruit.colories}`))
console.log(`\nFruit Names:`)

fruit_names.forEach((name) => console.log(name))
console.log(`\nFruit Colors:`)

fruit_colors.forEach((color) => console.log(color))