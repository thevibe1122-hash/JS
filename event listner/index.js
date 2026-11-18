// eventListner = a specific events to creat interactive web page 
//                events; click,mouse over and mouse out
//                .addEventListner(event,callback)

const box = document.getElementById(`mybox`)
const button = document.getElementById(`button`)
let text = `click me 😊`

function changeColor(event) {
    event.target.style.backgroundColor = `red`
    event.target.textContent = `fuck of`
};

button.addEventListener(`click`,(event) => { box.style.backgroundColor = `red`
                                          box.textContent = `fuck off! 😡`})
                                          text = `click me 😊`;

button.addEventListener(`mouseover`,(event) => { box.style.backgroundColor = `blue`
                                                 box.textContent = `don edge me 😃`})
                                                 text = `u scared? 😏`;

button.addEventListener(`mouseout`,(event) => { box.style.backgroundColor = `aqua`
                                                box.textContent = text});