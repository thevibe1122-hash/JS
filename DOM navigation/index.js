//DOM navigation = is the process of moving through the elements 
//                of a web page using JavaScript. It allows developers to 
//                access and manipulate the structure and content of the HTML document.

//........firstChild = returns the first child element of a specified parent element................

const parentElement = document.querySelectorAll('ul');
const firstChild = parentElement[0].firstElementChild;
console.log(firstChild); // Output: <li>apple</li> (the first child element)
firstChild.style.color = 'red'; // Change the color of the first child element to red

parentElement.forEach((parent) => {
    const firstChild = parent.firstElementChild;
    firstChild.style.color = 'red'; // Change the color of the first child element to red
})

//........lastChild = returns the last child element of a specified parent element................

parentElement.forEach((parent) => {
    const lastChild = parent.lastElementChild;
    lastChild.style.color = 'yellow'; // Change the color of the last child element to yellow
})

//.......nextSibling = returns the next sibling element of a specified element................

const element = document.getElementById('apple');
const nextSibling = element.nextElementSibling;
nextSibling.style.color = 'blue'; // Change the color of the next sibling element to blue

//.......previousSibling = returns the previous sibling element of a specified element................

const Elem = document.getElementById('spinach');
const previousSibling = Elem.previousElementSibling;
previousSibling.style.color = 'green'; // Change the color of the previous sibling element to green

//.......parentElement = returns the parent element of a specified element....................

const elem = document.getElementById('apple');
const parentElem = elem.parentElement;
parentElem.style.border = '1px solid white'; // Add a border to the parent element

//.......childElementCount = returns the number of child elements of a specified parent element....................

const parent = document.getElementById('fruit');
const childCount = parent.children
childCount.forEach((child) => {
    child.style.fontFamily = 'monospace'; // Change the font family of each child element to monospace
})


