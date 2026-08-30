//a callback is a function that is passed as an argument to another function and is executed after the other function has completed its execution.

function hello(callback) {
    setTimeout(() => {
        console.log(`hello`)
        setTimeout(() => {
            callback()

        }, 1000)

    }, 3000)


}

function goodbye() {
    setTimeout(() => {
        console.log(`goodbye`)
    })

}


function leave() {
    setTimeout(() => {
        console.log(`leave`)
    })

}

function wait() {
    setTimeout(() => {
        console.log(`wait`)
    })

}

// hello(wait)

function sum(x, y, callback) {
    let c = x + y
    callback(x, y, c)
}



function display_page(x, y, result) {
    document.getElementById('myheading').textContent = `The sum of ${x} and ${y} is ${result}`;

}

sum(1, 90, display_page)

