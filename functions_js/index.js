const heading = document.getElementById('myheading')

let h = `happy birthday `
let b = `to you `
let hb = h + b + `<hr>`
let user = `Marshel`
let age = ` 21 `

function hbd(user, age) {
    heading.innerHTML += hb + hb + h + `dear ${user},` + `<hr>` + `ur ${age} now,` + `<hr>` + hb
}

hbd(user, age);
hbd(`barney`, `31`);        