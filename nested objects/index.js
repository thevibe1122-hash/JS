// Nested objects = object inside another object
//            helps to represent complex data structure 
//            child object is inclosed by parent object

//   EX: Person{Address{},Contact{}}


class person{
    constructor(name,age,...address){
    this.name=name
    this.age=age
    this.address = new Address(...address)
    }
}

class Address{
    constructor(street,city,country){
        this.street=street
        this.country=country
        this.city=city
    }
}

const person1 = new person(`joseph`,32,
                `124 pinaple street`,
                `bikini bottom`,
                `IN waters`)

const person2 = new person(`Hannah`,90,
                `129 pinaple street`,
                `bikini bottom`,
                `IN waters`)
                
const person3 = new person(`Fin`,20,
                `169 pinaple street`,
                `bikini bottom`,
                `IN waters`)

console.log(person1.address.city)

