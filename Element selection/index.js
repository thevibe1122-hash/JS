// element selecters = Methodes used to select elements from the DOM
//                     they allow you to select elements based on their tag name, class name, id, or other attributes.

// getElementById = Method used to select an element based on its unique id attribute.
const header = document.getElementById('myheading');
header.style.color = 'orange';

// getElementsByClassName = Method used to select elements based on their class name. It returns a live HTMLCollection of elements.
const items = document.getElementsByClassName('item');
items[0].style.color = 'red';
items[1].style.color = 'blue';
items[2].style.color = 'green';

for (let fruit of items) {
    fruit.style.fontWeight = 'bold';
}
// Array.from() = Method used to convert an array-like object (such as an HTMLCollection or NodeList) into a true array. 
// It allows you to use array methods on the resulting array.

Array.from(items).forEach((item) => {
    item.style.textDecoration = 'underline';
});

// getElementsByTagName = Method used to select elements based on their tag name. It returns a live HTMLCollection of elements.
const listItems = document.getElementsByTagName('li');
listItems[0].style.color = 'wheat';
listItems[1].style.color = 'pink';
listItems[2].style.color = 'purple';

Array.from(listItems).forEach((item) => {
    item.style.textDecoration = 'none';
});

// querySelector = Method used to select the first element that matches a specified CSS selector. It returns the first matching element or null if no match is found.
const firstItem = document.querySelector('.item');
console.log(firstItem);

// querySelectorAll = Method used to select all elements that match a specified CSS selector. It returns a static NodeList of matching elements.
//nodelist = A collection of nodes (elements) returned by querySelectorAll. 
// It is not live, meaning it does not automatically update when the DOM changes.
const allItems = document.querySelectorAll('.item');
allItems.forEach((item) => {
    item.style.fontFamily = 'monospace';
})

