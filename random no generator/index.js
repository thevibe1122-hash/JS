import { random } from "../modules/random.js";

const min = 1
const max = 6;
const Btn = document.getElementById(`myBtn`)
const Lable1 = document.getElementById(`result1`)
const Lable2 = document.getElementById(`result2`)
const Lable3 = document.getElementById(`result3`)
let rand;
Btn.onclick = function () {
    rand = random.randint(max,min)
    Lable1.textContent = rand
    rand = random.randint(max,min)
    Lable2.textContent = rand
    rand = random.randint(max,min)
    Lable3.textContent = rand
}
