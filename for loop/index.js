const myheader = document.getElementById('myheading');
myheader.textContent = "";


for (let i = 1; i < 101; i++) {
    if (i % 5 === 1) {
        myheader.innerHTML += "<br/>" + "<hr/>" + `<button>${i}</button>`;
    }
    else if (i === 13) {
        continue;
    }
    myheader.innerHTML += i + " ";

}