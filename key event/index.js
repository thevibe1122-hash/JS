// event listner for key detection
//               keydown(press a key),keyup(release a key)

const  box = document.getElementById(`box`)
const move = 10
let x = 0
let y = 0



document.addEventListener("keydown",(event)=> {
    
    box.textContent = `😡`
    box.style.backgroundColor = `red`
    event.preventDefault()

    if (event.key) {
        switch (event.key) {
            case `w`:
                y -= move;
                break;
            case `s`:
                y += move;
                break;
            case `a`:
                x -= move;
                break;
            case `d`:
                x += move;
                break;
        }
        box.style.top = `${y}px`  
        box.style.left = `${x}px`  

    }

})

document.addEventListener("keyup",(event)=> {

    box.textContent = `😏`
    box.style.backgroundColor = `aqua`

})