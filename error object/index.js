//Error = An object that is created to represent a problem 
//        that occurse dueing user input or establishing connections

try{
console.log(`hello`)
console.log(`this is the end 4 u`)
//NETWORK ERRORS 
// PROMISE REJECTIONS 
// SECURITY ERRORS
}
catch(error){
    console.error(error)
}
finally{
    //CLOSE FILES 
    // CLOSE CONNECTIONS 
    // RELEASE RESOURCES
    console.log(`this's alwasy here`)
}




try{
    const divident = window.prompt(`Enter a divident`)
    const divider = window.prompt(`Enter a divider`)

    if(divider == 0){
        throw new Error("You can't divide by 0");
    }
    if(isNaN(divider) || isNaN(divident) ){
        throw new Error("both divident and divider must be numbers");
    }   
    console.log(divident/divider)
}
catch(error){
    console.error(error)
}