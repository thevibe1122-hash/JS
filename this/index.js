// this in global scope used for current context.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "none",
    sayhello() { console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); },
    eat() { console.log(`${this.firstName} is eating.`); }
}

person.sayhello();
person.eat();