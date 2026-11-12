// closure = A function inside another function
//          inner fun has acces to the variables and scopes
//          of the outer function.
//          Allow for private variables and state maintainance 
//          Used frequently in JS frameworkes




function creatGame() {
    score = 0
    function increase_score(points) {
    score+=points
    console.log(`+${points}pts`)
}
function decrease_score(points) {
    score-=points
    console.log(`-${points}pts`)
}

function getscore() {
    console.log(`final score = ${score}pts`)
}
return {increase_score,decrease_score,getscore}
}

const game = creatGame()

game.increase_score(10)
game.decrease_score(2)
game.getscore()
