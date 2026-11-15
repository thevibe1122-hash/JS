export class random{
    static PI = 3.14

    static randint( max = 0 , min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    static choice (arr) {
        return arr[this.randint(arr.length - 1)]
    }

    static choices (arr,num = 1) {
        let a = []
        let b;
        for (let i = 0; i < num; i++) {
            b = this.choice(arr)
            if (!(a.includes(b))) {
              a.push(b)  
            }
            else{
                i--
            }
            
        }
        return a
    }

}





