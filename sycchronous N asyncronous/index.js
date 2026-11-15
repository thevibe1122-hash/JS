//synchrounous = executes line by line waiting for 
//               each one ahead to complete
//asynchrounous = allows tasks to execute independently 

//----------------------Example 1--------------------------
// setTimeout 
setTimeout(()=> console.log(`task one is complete`),3000)
setTimeout(()=> console.log(`task two is complete`),5000)
setTimeout(()=> console.log(`task three is complete`),1000)

//----------------------Example 2--------------------------
// callbacks
function One(callback) {
    setTimeout(() => {console.log(`task 1`);callback()}, 7000);
    
}

function Two() {
    console.log(`task 2`)
    console.log(`task 4`)
    console.log(`task 5`)
}

One(Two)