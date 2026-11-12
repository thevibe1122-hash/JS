// Fisher-yates Algorithm

const cards = [`A`,1,2,3,4,5,6,7,8,9,10,`J`,`Q`,`K`]

function Shuffle(arr) {
    for (let i= arr.length-1; i > 0; i--) {
        const random = Math.floor(Math.random()*(i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]]
       }
}

Shuffle(cards)

console.log(cards)