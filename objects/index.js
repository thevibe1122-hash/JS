// objects are a collection of key-value pairs

const person1 = {
    firstName: "patric",
    lastName: "star",
    age: 30,
    job: "none",
    sayhello: () => { console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); },
    eat: () => { console.log(`I'm eating a rostbeef.`); }
}
const person2 = {
    firstName: "spongbob",
    lastName: "squarepants",
    age: 30,
    job: "cook",
    sayhello: () => { console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); },
    eat: () => { console.log(`I'm eating a krabby patty.`); }
}
const person3 = {
    firstName: "sandy",
    lastName: "cheeks",
    age: 30,
    job: "scientist",
    sayhello: () => { console.log(`Hello, my name is ${this.firstName} ${this.lastName}`); },
    eat: () => { console.log(`I'm eating a nut.`); }
}



person1.sayhello();
person2.sayhello();
person3.sayhello();

person1.eat();
person2.eat();
person3.eat();
