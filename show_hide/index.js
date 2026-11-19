const img = document.getElementById('img')
const button = document.getElementById(`button`)

button.addEventListener(`click`,(event) => {
    if (button.textContent === `Hide`) {
        img.style.visibility = `hidden`
        button.textContent = `Show`
    }
    else{
       img.style.visibility = `visible`
       button.textContent = `Hide` 
    }
})