// setTimeout() = allow you to schadule the excution of 
//     a function afte a set amount of time(millisecond)
const p = document.getElementById(`p`)

let TOI

function startTimer() {
    TOI=setTimeout(() => window.alert(`time is out!`),3000)
    console.log(`started`)
}
function ClearTimer() {
    clearTimeout(TOI)
     console.log(`cleared`)
}