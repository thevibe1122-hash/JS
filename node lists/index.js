//nodelist = Static collection of HTML by (id , class , element)
//           can be created by using QuerySelectorAll() 
//           similar to an array, but has no (map , filter,) 
//           won't update to auotomatically reflect changes


// ADD TO NODELIST
const newButton = document.createElement("button")
newButton.textContent = `B5`
newButton.classList = `B`
document.body.appendChild(newButton)

let buttons = document.querySelectorAll(`.B`)

buttons.forEach(button => {
    button.style.backgroundColor = `aqua`
    button.textContent+=`😏`
})

// click
buttons.forEach(button => {
    button.addEventListener(`click`,(event)=>{
        event.target.style.backgroundColor = `tomato`
    })
    
})

// mouseout
buttons.forEach(button => {
    button.addEventListener(`mouseout`,(event)=>{
        event.target.style.backgroundColor = `aqua`
    })
    
})

// mouseover
buttons.forEach(button => {
    button.addEventListener(`mouseover`,(event)=>{
        event.target.style.backgroundColor = `aquamarine`
    })
    
})

