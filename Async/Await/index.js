// Async/Await = Async => function that returns a promise
//               Await => wait for a promise
//               Allows us to write asynchronous code in a synchronous manner
//               Doesn't have reject or resolve, it just returns a promise

function walk_dog() { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const dogWalked = true; // Simulating a successful dog walk
            if (dogWalked) {
                
                resolve('Dog walked');
            } else {
                reject('Failed to walk dog');
            }
        }, 2000);
    });
}

function clean_kitchen() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const kitchenCleaned = true; // Simulating a successful kitchen cleaning
            if (kitchenCleaned) {
                
                resolve('Kitchen cleaned');
            } else {
                reject('Failed to clean kitchen');
            }   
        }, 1000);
    });
}

function wash_dishes() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dishesWashed = true; // Simulating a successful dish washing
            if (dishesWashed) {
                
                resolve('Dishes washed');
            } else {
                reject('Failed to wash dishes');
            }
        }, 1000);
    });
}

async function do_housework() {
   try {
    const walkDogResult = await walk_dog();
    console.log(walkDogResult);

    const cleanKitchenResult = await clean_kitchen();
    console.log(cleanKitchenResult);

    const washDishesResult = await wash_dishes();
    console.log(washDishesResult);

    console.log('All housework done!');}
    catch (error) {
        console.error('Error occurred:', error);
    }
}

do_housework()