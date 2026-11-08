//static = keyword that defines properties or methodes 
//        that belongs to a clss itself rather than created
//        object from the class. (the class owns anything static)

class Mathutil{
    static PI = 3.14

    static GetDiameter(radius){
        return radius*2
    }

    static GetCircum(radius){
        return (radius*2* this.PI).toFixed(2)
    }

     static Area(radius){
        return (radius*radius* this.PI).toFixed(2)
    }
}

console.log(Mathutil.PI)
console.log(Mathutil.GetDiameter(10))
console.log(Mathutil.GetCircum(10))
console.log(Mathutil.Area(10))
console.log(`-------------------------`)

class User{
    static usercount = 0
    constructor(username){
        this.username = username
        User.usercount+=1
    }
    static getUserCount(){
        console.log(`there are ${User.usercount} users online`)
    }

    sayHello(){
        return `hello, my name is ${this.username}`
    }
    
}

const user1 = new User(`spongebob`)
const user2 = new User(`patrick`)
const user3 = new User(`sandy`)

console.log(user1.sayHello())
User.getUserCount()

