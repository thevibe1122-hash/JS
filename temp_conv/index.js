const CRbtn = document.getElementById("to-celsius");
const FRbtn = document.getElementById("to-fahrenheit");
const Ctxt = document.getElementById("c");
const Ftxt = document.getElementById("f");
const mybtn = document.getElementById(`submit`)
const h1 = document.getElementById(`h1`)

const textbox = document.getElementById(`textbox`)
let result = document.getElementById(`result`)
let temp;

function convert() {
    temp = Number(textbox.value)
    if (FRbtn.checked) {
        temp = (temp - 32) * (5 / 9)
        result.textContent = `${temp.toFixed(1)} °F`
    }
    else if (CRbtn.checked) {
        temp = (temp * 9 / 5) + 32
        result.textContent = `${temp.toFixed(1)} °C`
    } else {
        result.textContent = `please select a unit`
    }


}


CRbtn.onclick = function () {
    if (CRbtn.checked) {
        Ctxt.style.color = "black";
        Ftxt.style.color = "rgb(53, 53, 53)";
        Ctxt.style.fontSize = "1.25em"
        Ftxt.style.fontSize = "1em"
        h1.textContent = `Temperature (°F)`
    }

}

FRbtn.onclick = function () {
    if (FRbtn.checked) {
        Ftxt.style.color = "black";
        Ctxt.style.color = "rgb(53, 53, 53)";
        Ftxt.style.fontSize = "1.25em"
        Ctxt.style.fontSize = "1em"
        h1.textContent = `Temperature (°C)`
    }
}


