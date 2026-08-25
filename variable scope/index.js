// veriables that are declared in a function has a local scope 
// and they can only be accessed from that function 
// var has a global scope and can be accessed from anywhere 
// let and const are block-scoped
// variable declared outside of a function has global scope

let x = 3

function f1() {
    let x = 10;
    console.log(x)
}
function f2() {
    let y = 120;
    console.log(y)
}

f1()
f2()

