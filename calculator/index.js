const display = document.getElementById(`DISPLAY`)
const plus = document.getElementById(`+`)
const minus = document.getElementById(`-`)
const product = document.getElementById(`*`)
const divid = document.getElementById(`/`)
const one = document.getElementById(`1`)
const two = document.getElementById(`2`)
const three = document.getElementById(`3`)
const four = document.getElementById(`4`)
const five = document.getElementById(`5`)
const six = document.getElementById(`6`)
const seven = document.getElementById(`7`)
const eight = document.getElementById(`8`)
const nine = document.getElementById(`9`)
const zero = document.getElementById(`0`)
const dot = document.getElementById(`.`)
const clear = document.getElementById(`clear`)
const equal = document.getElementById(`=`)
let i;
let arr =[]
let evaluated = false

function check_CO(para) {
    //prevent the session to start with operations or decimal point 
    if((display.value[0] == undefined )&& (para ==`+`  || para ==`*` || para ==`/` || para ==`.`)){
            return true
    }
    else{
        //prevents consequative decimal points
        if(display.value[i] ==`.` && para == `.`){
             return true
        }
        // prevents consequative operation signs
        else if ((display.value[i] ==`+` || display.value[i] ==`-` || display.value[i] ==`*` || display.value[i] ==`/` || display.value[i] ==`.` ) && (para ==`+` || para ==`-` || para ==`*` || para ==`/` || para ==`.` ) ) {
            return true
        }
        else{
            return false
        }
    }   
}



function appendTODisplay(para) {
    //clears the display after evaluation ends
    if (evaluated)  {
        if  (para ==`+`  || para ==`*` || para ==`/` || para ==`-`){
        evaluated = false
        }
        else{
            ClearDisplay()
            evaluated = false
        }
    }


    //replaces zero with a the next imput if there is no decimal point or oporation between them 
     if ( (display.value[i+1] == 0) && (display.value[i] ==`+`  || display.value[i] ==`*` || display.value[i] ==`/` || display.value[i] ==`-`) ) {
        if  (para ==`+`  || para ==`*` || para ==`/` || para ==`-` || para ==`.`){
        }
        else{
            arr = [...display.value]
            arr.pop(i)
            display.value = ``
            for (let index = 0; index < arr.length; index++) {
                 display.value+= arr[index];
                
            }

        }   
    }
    //replaces operetion when pressed consequatavely
    if ((display.value[i+1] ==`+`  || display.value[i+1] ==`*` || display.value[i+1] ==`/` || display.value[i+1] ==`-`) ) {
        if  (para ==`+`  || para ==`*` || para ==`/` || para ==`-` ){
            arr = [...display.value]
            arr.pop(i)
            display.value = ``
            for (let index = 0; index < arr.length; index++) {
                 display.value+= arr[index];
                
            }
        }
          
    }

    
        
    
    i = display.value.length - 1
    
    //prevent repidtition of decimalp point in the same string of numbers
    if (para == '.' && display.value.includes(`.`)) {
       if ((display.value.lastIndexOf(`+`) + display.value.lastIndexOf(para) == 0) && (display.value.lastIndexOf(`-`) + display.value.lastIndexOf(para) == 0) && (display.value.lastIndexOf(`*`) + display.value.lastIndexOf(para) == 0) && (display.value.lastIndexOf(`/`) + display.value.lastIndexOf(para) == 0)) {
            
                console.log( `last index of - ${display.value.lastIndexOf(`-`)}`)
                console.log( `last index of . ${display.value.lastIndexOf(`.`)}`)
       }
        else if ((display.value.lastIndexOf(`+`) < display.value.lastIndexOf(para)) && (display.value.lastIndexOf(`-`) < display.value.lastIndexOf(para)) && (display.value.lastIndexOf(`*`) < display.value.lastIndexOf(para)) && (display.value.lastIndexOf(`/`) < display.value.lastIndexOf(para))) {
            console.log( `last index of + ${display.value.lastIndexOf(`+`)}`)
            console.log( `last index of . ${display.value.lastIndexOf(`.`)}`)
       }
        else {
            if (!check_CO(para)) {
                 display.value += para;
            }
        }
    
    }

    else{
        if (!check_CO(para)) {
            display.value += para;
        }
    }
}
    

function ClearDisplay() {
    display.value= ``;
}

function calculate() {
try{   if (eval(display.value) == infinity) {
            throw new Error()
        }  
        else{
          display.value = eval(display.value)  
        } 
    
}
catch(error){display.value=`ERROR`};
evaluated = true

}

plus.onclick = ()=>appendTODisplay(`+`)
minus.onclick = ()=>appendTODisplay(`-`)
product.onclick = ()=>appendTODisplay(`*`)
divid.onclick = ()=>appendTODisplay(`/`)
one.onclick = ()=>appendTODisplay(`1`)
two.onclick = ()=>appendTODisplay(`2`)
three.onclick = ()=>appendTODisplay(`3`)
four.onclick = ()=>appendTODisplay(`4`)
five.onclick = ()=>appendTODisplay(`5`)
six.onclick = ()=>appendTODisplay(`6`)
seven.onclick = ()=>appendTODisplay(`7`)
eight.onclick = ()=>appendTODisplay(`8`)
nine.onclick = ()=>appendTODisplay(`9`)
zero.onclick = ()=>appendTODisplay(`0`)
dot.onclick = ()=>appendTODisplay(`.`)
clear.onclick = ()=>ClearDisplay()
equal.onclick = ()=>calculate()
