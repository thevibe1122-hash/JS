// date objects = objects containing date and time

const date = new Date()

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

date.setFullYear(2006)
date.setMonth(0)
date.setDate(13)
date.setHours(6)
date.setMinutes(32)
date.setSeconds(14)

const dateOfBirth = new Date(`2006-01-13`)

console.log(date)
console.log(dateOfBirth)