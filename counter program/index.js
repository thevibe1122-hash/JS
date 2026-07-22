let countlable;
const decrease = document.getElementById("mybutton1");
const reset = document.getElementById("mybutton2");
const increase = document.getElementById("mybutton3");
countlable = document.getElementById("count");
let count = 0;

decrease.onclick = function () {
    --count;
    countlable.textContent = count;
}
reset.onclick = function () {
    count = 0;
    countlable.textContent = count;
}
increase.onclick = function () {
    count++;
    countlable.textContent = count;
}