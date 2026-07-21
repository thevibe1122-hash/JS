let username;

// username = window.prompt(`what's your name?`);

// document.getElementById("myheading").textContent = `hello ${username}`;

document.getElementById("myBtn").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myheading").textContent = `hello ${username}`;
}