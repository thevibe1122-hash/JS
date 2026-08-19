const header = document.getElementById('myheading')
const fullname = `Salahadin The Gr8`
const myp = document.getElementById('myp')

// let firstname = fullname.slice(0, 5)
// let lastname = fullname.slice(5)



// let firstname = fullname.slice(0, fullname.indexOf(" "));
// let lastname = fullname.slice(fullname.indexOf(" "))

// header.textContent = firstname
// myp.textContent = lastname

const email = `salahthegr8@gamil.com`
let username = email.slice(0, email.indexOf(`@`))
let domain_name = email.slice(email.indexOf(`@`) + 1)

header.textContent = `Welcome ${username} `;
myp.textContent = domain_name