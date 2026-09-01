// forEach() = method that executes a provided function once for each array element

const myArr = [1, 2, 3, 4, 5]

function display(element) {
    console.log(element)
}

function double(element, index, array) {
    array[index] = element * 2
}

function triple(element, index, array) {
    array[index] = element * 3
}


myArr.forEach(double);

myArr.forEach(triple);

myArr.forEach(display);



