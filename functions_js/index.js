const heading = document.getElementById('myheading')

let h = `happy birthday `
let b = `to you `
let hb = h + b + `<hr>`
let user = `Marshel`
let age = ` 21 `
let num = 2345678
function hbd(user, age) {
    heading.innerHTML += hb + hb + h + `dear ${user},` + `<hr>` + `ur ${age} now,` + `<hr>` + hb
}

function isEven(num) {
    return num % 2 === 0 ? true : false

}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.') ? true : false
}

heading.innerHTML = isValidEmail(`zbo@123.com`)