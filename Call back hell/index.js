//callback hell = situation where callbackes are nested within callbacks several levels deep, 
//                making the code hard to read and maintain. This often occurs in asynchronous programming,
//                especially in JavaScript, where multiple asynchronous operations depend on each other.

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback(); 
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks completed");
                });
            });
        });
    }
);  

