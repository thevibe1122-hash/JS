const myCheckbox = document.getElementById('myCheckbox');
const myButton = document.getElementById('myButton');
const visaBtn = document.getElementById('visa');
const mastercardBtn = document.getElementById('mastercard');
const paypalBtn = document.getElementById('paypal');
const visa = document.getElementById('myvisa');
const mastercard = document.getElementById('mymastercard');
const paypal = document.getElementById('mypaypal');
const sub = document.getElementById('sub');

let result2 = document.getElementById('result2')

result2.style.display = 'none'

myCheckbox.onclick = function () {
    if (myCheckbox.checked) {
        sub.textContent = `unsubescribe`
    }
    else {
        sub.textContent = `subescribe`
    }
}
visaBtn.onclick = function () {
    result2.textContent = ``
    visa.style.color = 'green'
    paypal.style.color = 'white'
    mastercard.style.color = 'white'
    result2.style.display = 'none'
}
mastercardBtn.onclick = function () {
    result2.textContent = ``
    mastercard.style.color = 'green'
    visa.style.color = 'white'
    paypal.style.color = 'white'
    result2.style.display = 'none'
}
paypalBtn.onclick = function () {
    result2.textContent = ``
    paypal.style.color = 'green'
    visa.style.color = 'white'
    mastercard.style.color = 'white'
    result2.style.display = 'none'
}


myButton.onclick = function () {
    if (mastercardBtn.checked || visaBtn.checked || paypalBtn.checked) {
        return
    } else {
        result2.textContent = `you have not selected a card`;
        result2.style.display = 'block'
    }
    if (result2.textContent == ``) {
        result2.style.display = 'none'
    }

}