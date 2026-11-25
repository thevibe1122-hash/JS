// promisses = used to handle asynchronous operations in JavaScript. 
//             They represent a value that may be available now, or in the future, or never. 
//             Promises have three states: pending, fulfilled, and rejected.

function walk_dog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dog_walked = true; // Simulating a successful operation
            if (!dog_walked) {
                reject("Dog is not walked");
            }else {
                resolve("Dog is walked");
            }
        }, 2000);           
})
}

function clean_kitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchen_cleaned = true; // Simulating a successful operation
            if (!kitchen_cleaned) {
                reject("Kitchen is not cleaned");
            }else { 
            resolve("Kitchen is cleaned");
            }
        }, 3000);
    });         
}

function take_out_trash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash_taken_out = false; // Simulating an unsuccessful operation
            if (!trash_taken_out) {
                reject("Trash is not taken out");// this will be caught in the catch block of the promise chain as an error
            }else {
                resolve("Trash is taken out");
            }
        }, 1000);
    }); 
}

walk_dog().then(value => {console.log(value);return clean_kitchen();})
          .then(value => {console.log(value);return take_out_trash();})
          .then(value => {console.log(value);console.log("All tasks are completed");})
          .catch(error => console.error("Error: " + error))
