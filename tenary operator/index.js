// let age = 171
const heading = document.getElementById('myheading')
//let message = age >= 18 ? 'you are an adult' : 'you are a child'

// heading.textContent = message

// let time = 11

// let greeting = time < 12 ? "good morning" : time < 18 ? "good afternoon" : "good evening"

// heading.textContent = greeting
// let IsStudent;

// let result = IsStudent ? "you are a student" : "you are not a student"

// heading.textContent = result

let purchaseamount = 99;
let discount = purchaseamount >= 100 ? purchaseamount / 10 : 0

heading.textContent = `your discount is ${discount.toFixed(2)}$ and your total is ${(purchaseamount - discount).toFixed(2)}$`