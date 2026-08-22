const min = 1
const max = 100
const heading = document.getElementById(`myheading`)
const submitBtn = document.getElementById(`submitBtn`)
const guessField = document.getElementById(`guessField`)
const resetBtn = document.getElementById(`resetBtn`)
const myp = document.getElementById(`myp`)
const myp2 = document.getElementById(`myp2`)
const myp3 = document.getElementById(`myp3`)
let answer = (Math.floor(Math.random() * (max - min + 1)) + min);
let guess;
answer = 10

myp.textContent = `Guess a number between ${min} and ${max}`;

resetBtn.style.display = `none`
submitBtn.onclick = function () {
    guess = Number(guessField.value);
    if (guess > max || guess < min) {
        myp3.textContent = `Please enter a value between ${min} and ${max}`;
    }
    else if (guess === answer) {
        myp3.textContent = "You win!";
        heading.textContent = "Congratulations!";
        resetBtn.style.display = `block`
        submitBtn.style.display = `none`
        guessField.style.display = `none`
        myp3.style.color = `green`
        myp.textContent = `You have guessed the correct number`
    } else if (guess < answer) {
        myp2.innerHTML += guess + " ⬆️" + "<br>";
        myp3.textContent = ``;

    } else {
        myp2.innerHTML += guess + " ⬇️" + "<br>";
        myp3.textContent = ``;
    }

    guessField.value = ""
}


