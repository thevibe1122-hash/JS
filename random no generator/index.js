const min = 1
const max = 6;
const Btn = document.getElementById(`myBtn`)
const Lable1 = document.getElementById(`result1`)
const Lable2 = document.getElementById(`result2`)
const Lable3 = document.getElementById(`result3`)
let rand;
Btn.onclick = function () {
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    Lable1.textContent = rand
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    Lable2.textContent = rand
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    Lable3.textContent = rand
}
