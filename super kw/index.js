// super = this. key word for the parent class

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`${this.name} moves at a speed of ${speed}kph`)
    }
}

class Rabit extends Animal{
    constructor(name,age,RunSpeed){
        super(name,age)
        this.RunSpeed = RunSpeed
    }
    run(){
        console.log(`${this.name} can run`)
        super.move(this.RunSpeed)
    }
}

class Hawk extends Animal{
    constructor(name,age,FlySpeed){
        super(name,age)
          this.FlySpeed = FlySpeed
          super.move(this.RunSpeed)

    }
    fly(){
        console.log(`${this.name} can fly`)
        super.move(this.FlySpeed)
    }

}

class Fish extends Animal{
    constructor(name,age,SwimSpeed){
        super(name,age)
         this.SwimSpeed = SwimSpeed

    }
    swim(){
        console.log(`${this.name} can swim`)
        super.move(this.SwimSpeed)
    }

}


const rabbit = new Rabit(`bugs`,1,25)
const hawk = new Hawk(`eyes`,5,55)
const fish = new Fish(`nemo`,0.2,5)

console.log(rabbit.name)
console.log(fish.age)
console.log(hawk.FlySpeed)

rabbit.run()
hawk.fly()
fish.swim()
