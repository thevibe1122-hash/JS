//getter = makes a property readable
//setter = makes a proparty writeable
//validat and modify a value when reading/writing a propery

 class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }

    set width(new_width){
        if (new_width>0){
            this._width = new_width
        }else{
            console.error(`width must be a positive number`)
        }
    }

    set height(new_height){
        if (new_height>0){
            this._height = new_height
        }else{
            console.error(`height must be a positive number`)
        }
    }

    get width(){
        return `${(this._width.toFixed(1))}cm`
    }
    get height(){
        return `${(this._height.toFixed(1))}cm`
    }


 }

 const Rect = new Rectangle(1000, 4)

 console.log(Rect.width,`and`,Rect.height)

 class Person{
    constructor(F_name,L_name,age){
        this.F_name = F_name
        this.L_name = L_name
        this.age = age
    }

    set F_name (newF_name){
        if (typeof(newF_name)=== "string" && newF_name.length>0) {
            this._F_name = newF_name
        } else if(typeof(newF_name)!= "string"){
            console.error(`your name must not be numbers or special characters`)
        }else if(newF_name.length<=0){
            console.error(`name must contain atleast one character`)
        }
    }

    set L_name (newL_name){
        if (typeof(newL_name)=== "string" && newL_name.length>0) {
            this._L_name = newL_name
        } else if(typeof(newL_name)!= "string"){
            console.error(`your name must not be numbers or special characters`)
        }else if(newL_name.length<=0){
            console.error(`name must contain atleast one character`)
        }
    }

    set age (new_age){
        if(new_age > 0){
            this._age = new_age
        }else if(typeof(new_age)!== `number`){
            console.error(`age must be represented by a numerical value`)
        }
        else{
            console.error(`age must be greater than 0`)
        }
    }

    get F_name(){
        return this._F_name
    }
    get L_name(){
        return this._L_name
    }
    get age(){
        return this._age
    }

 }

 user1 = new Person("salah",`Z gr6`,21)

console.log( user1.F_name)
console.log( user1.L_name)
console.log( user1.age)
