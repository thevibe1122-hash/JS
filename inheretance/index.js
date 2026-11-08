// inheretence = allow a new class to inheret the properties
//               and methodes from an existing class (parent -> child)
//               helps with code reusability

class Animal{
    alive =true
    eat(){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }

}

class rabbit extends Animal{
    name = `rabbit`
    run(){
        console.log(`$ Mi a BOMBOCLAT! Dis ${this.name} is runnin'`)
    }
}

class fish extends Animal{
    name = `fish`

    swim(){
        console.log(` Mi a BOMBOCLAT! Dis ${this.name} is running'`)
    }
}

class hawk extends Animal{
    name = `hawk`
    fly(){
        console.log(` Mi a BOMBOCLAT! Dis ${this.name} is flying'`)
    }
}

const Rabit = new rabbit()
const Fish = new fish()
const Hawk = new hawk()

Hawk.fly()
Fish.swim()
console.log(Rabit.alive)
