let username
const heading = document.getElementById("myheading");
const myparagraph = document.getElementById("myp");
const mybtn = document.getElementById(`Reset`)


mybtn.onclick = function () {
    username = ``
    while (username === ``) {
        username = window.prompt(`enter your name`);
        if (username) {
            heading.textContent = `hello ${username}`;
        } else {
            myparagraph.textContent = `you cancelled`;
        }
    }
}





