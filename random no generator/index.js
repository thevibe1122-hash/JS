const min = 50
const max = 100;

document.getElementById(`myBtn`).onclick = function () {
    let random_no = Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById("result").textContent = `The random number is: ${random_no}`;
}