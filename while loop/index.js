let username
let password
const login = document.getElementsByClassName(`login`)
const heading = document.getElementById("myheading");
const myparagraph = document.getElementById("myp");
const mybtn = document.getElementById(`Reset`)
const submit = document.getElementById(`Submit`);
const user = document.getElementById(`User`);
const pass = document.getElementById(`Pass`);


// mybtn.onclick = function () {
//     username = ``
//     while (username === ``) {
//         username = window.prompt(`enter your name`);
//         if (username) {
//             heading.textContent = `hello ${username}`;
//         } else {
//             myparagraph.textContent = `you cancelled`;
//         }
//     }
// }

// mybtn.onclick = function () {
//     do {
//         username = window.prompt(`enter your name`);
//     } while (username === `` || username === null)
//     heading.textContent = `hello ${username}`;
// }

submit.onclick = function () {
    if (user.value === `` || user.value === null) {
        window.alert(`enter your username`);
    }
    else if (pass.value === `` || pass.value === null) {
        window.alert(`enter your password`);
    }
    else {
        username = user.value
        password = pass.value
        if (username === `admin` && password === `admin`) {
            loggedin = true;
            heading.textContent = `Welcome`;
            myparagraph.textContent = `You are logged in`
            login[0].style.display = "none"
            submit.disabled = true;
            submit.textContent = `Submitted`
        }
        else {
            window.alert(`invalid username or password try again`);
        }
    }
}







