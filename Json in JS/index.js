//json = (Javascript Object Notation) is a lightweight data-interchange format. 
//        It is easy for humans to read and write. It is easy for machines to parse and generate.
//        JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, 
//        including C, C++, C#, Java, JavaScript, Perl, Python, and many others. 
//        These properties make JSON an ideal data-interchange language.

//         JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
//         JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

const names = ["spongebob","paterick","sandy","squidward",];
const person = {name: "spongebob",age: 20,gender: "male",occupation: "fry cook"};
const people = [{"name": "sponjbob","age": 20,"city": "Bikini Bottom","is_married": false,"hobby": ["jellyfishing", "blowing bubbles", "cooking"]},
                {"name": "paterick","age": 19,"city": "Bikini Bottom","is_married": false,"hobby": ["sleeping", "eating ", "annoying spongebob"]},
                {"name": "sandy","age": 22,"city": "Bikini Bottom","is_married": false,"hobby": ["science", "rock climbing", "playing board games"]},
                {"name": "squidward","age": 25,"city": "Bikini Bottom","is_married": false,"hobby": ["playing clarinet", "complaining", "being grumpy"]}]

const json_names = JSON.stringify(names); //converts the people array to a JSON string
const parsed_names = JSON.parse(json_names); //converts the JSON string back to a JavaScript object



fetch('people.json')//fetches the names.json file
    .then(response => response.json())//converts the JSON string to a JavaScript object
    .then(values => {values.forEach(element => {console.log(element.name)})})
    .catch(error => console.log(error))
