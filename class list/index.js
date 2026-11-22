// Class list = Element property in JS used to interact with 
//              an element's class list (css). 
//              Allows yu to make reusable classes for many 
//              elements across a web page

//add()
//remove()
//toggle(Remove if present , Add if not)
//replace(oldClass , newClass)
//contains()

const button = document.getElementById(`button`)


button.classList.add(`enabled`)

button.addEventListener(`mouseover`,(event)=>{
    event.target.classList.toggle(`hover`)
})

button.addEventListener(`mouseout`,(event)=>{
    event.target.classList.toggle(`hover`)
})

button.addEventListener(`click`,(event)=>{
    if (event.target.classList.contains(`disabled`)) {
        event.target.classList.replace(`disabled`,`enabled`)
    } else {
        event.target.classList.replace(`enabled`,`disabled`)
    }
    
})