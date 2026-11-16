//DOM = Document Object Model. they are the objects that represent the 
//      structure of a web page. 
//      The DOM allows us to manipulate the content and structure of 
//      a web page using JavaScript. provides a way to access and modify the 
//      elements, attributes, and text of a web page dynamically by using API methods and properties.

document.title = `Ma fuckin website Gng`
document.body.style.backgroundColor = `black`
document.body.style.color = `white`
const username =` sala`
const button = document.getElementById(`mybutton`)
const welcome = document.getElementById(`myheading`)
welcome.textContent+=  username === "" ? `guest`:username

button.setAttribute(`disabled`, `true`)

button.addEventListener('click', () => {
    alert('Button clicked!');
});