const A_button = document.getElementById("a");
const B_button = document.getElementById("b");
const C_button = document.getElementById("c");
const D_button = document.getElementById("d");
const E_button = document.getElementById("e");
const F_button = document.getElementById("f");
const G_button = document.getElementById("g");
const H_button = document.getElementById("h");
const I_button = document.getElementById("i");
const J_button = document.getElementById("j");
const K_button = document.getElementById("k");
const L_button = document.getElementById("l");
const M_button = document.getElementById("m");
const N_button = document.getElementById("n");
const O_button = document.getElementById("o");
const P_button = document.getElementById("p");
const Q_button = document.getElementById("q");
const R_button = document.getElementById("r");
const S_button = document.getElementById("s");
const T_button = document.getElementById("t");
const U_button = document.getElementById("u");
const V_button = document.getElementById("v");
const W_button = document.getElementById("w");
const X_button = document.getElementById("x");
const Y_button = document.getElementById("y");
const Z_button = document.getElementById("z");
const Newgame_button = document.getElementById("newgame");

const Img = document.getElementById("img");
const Attempts = document.getElementById("attempts");
const Word = document.getElementById("word");

let correctWord = "";
const maxAttempts = 6;
let wrongGuessCount = 0;
let lettersFound = [];
let lettersGuessed = [];
let gameActive = true;

// Array of words to choose from
const wordList = ["apple", "banana", "orange", "grape", "strawberry", "blueberry", "pineapple", "mango", "kiwi", "watermelon", "lemon", "lime", "cherry", "peach", "pear"];

function pickRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    correctWord = wordList[randomIndex].toLowerCase();
    lettersFound = new Array(correctWord.length).fill("_");
    updateWordDisplay();
}

function updateWordDisplay() {
    Word.textContent = `Word: ${lettersFound.join(" ")}`;
}

function updateAttemptsDisplay() {
    const remainingAttempts = maxAttempts - wrongGuessCount;
    Attempts.textContent = `You have ${remainingAttempts} attempts remaining.`;
}

function updateImageDisplay() {
    Img.src = `img/Hangman-${wrongGuessCount}.png`;
}

function isLetterGuessed(letter) {
    return lettersGuessed.includes(letter);
}

function addLetterGuessed(letter) {
    lettersGuessed.push(letter);
}

function isWordFound() {
    return lettersFound.every((letter) => letter !== "_");
}

function isAttemptsRunOut() {
    return wrongGuessCount >= maxAttempts;
}

function handleGuess(letter) {
    if (!gameActive) {
        return;
    }

    if (isLetterGuessed(letter)) {
        alert(`You have already guessed the letter '${letter.toUpperCase()}'!`);
        return;
    }

    addLetterGuessed(letter);

    // Disable on-screen button if it exists
    const btn = document.getElementById(letter);
    if (btn) {
        btn.disabled = true;
    }

    if (correctWord.includes(letter)) {
        // Replace all underscores at indices matching the guessed letter
        for (let i = 0; i < correctWord.length; i++) {
            if (correctWord[i] === letter) {
                lettersFound[i] = letter;
            }
        }
        updateWordDisplay();

        if (isWordFound()) {
            endGame(true);
        }
    } else {
        wrongGuessCount++;
        updateAttemptsDisplay();
        updateImageDisplay();

        if (isAttemptsRunOut()) {
            endGame(false);
        }
    }
}

function pressed(letter) {
    letter = letter.toLowerCase();
    handleGuess(letter);
}

function endGame(isWin) {
    gameActive = false;
    setTimeout(() => {
        if (isWin) {
            alert("Congratulations! You guessed the word: " + correctWord);
        } else {
            alert("Game Over! The word was: " + correctWord);
        }
    }, 100);
}

function newGame() {
    gameActive = true;
    wrongGuessCount = 0;
    lettersFound = [];
    lettersGuessed = [];

    // Enable all keyboard buttons again
    const buttons = document.querySelectorAll(".keyboard button");
    buttons.forEach((button) => {
        button.disabled = false;
    });

    updateAttemptsDisplay();
    updateImageDisplay();
    pickRandomWord();
}

Newgame_button.addEventListener("click", newGame);

A_button.addEventListener("click", () => pressed("a"));
B_button.addEventListener("click", () => pressed("b"));
C_button.addEventListener("click", () => pressed("c"));
D_button.addEventListener("click", () => pressed("d"));
E_button.addEventListener("click", () => pressed("e"));
F_button.addEventListener("click", () => pressed("f"));
G_button.addEventListener("click", () => pressed("g"));
H_button.addEventListener("click", () => pressed("h"));
I_button.addEventListener("click", () => pressed("i"));
J_button.addEventListener("click", () => pressed("j"));
K_button.addEventListener("click", () => pressed("k"));
L_button.addEventListener("click", () => pressed("l"));
M_button.addEventListener("click", () => pressed("m"));
N_button.addEventListener("click", () => pressed("n"));
O_button.addEventListener("click", () => pressed("o"));
P_button.addEventListener("click", () => pressed("p"));
Q_button.addEventListener("click", () => pressed("q"));
R_button.addEventListener("click", () => pressed("r"));
S_button.addEventListener("click", () => pressed("s"));
T_button.addEventListener("click", () => pressed("t"));
U_button.addEventListener("click", () => pressed("u"));
V_button.addEventListener("click", () => pressed("v"));
W_button.addEventListener("click", () => pressed("w"));
X_button.addEventListener("click", () => pressed("x"));
Y_button.addEventListener("click", () => pressed("y"));
Z_button.addEventListener("click", () => pressed("z"));



// Listen for physical keyboard presses
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key.length === 1 && key >= "a" && key <= "z") {
        pressed(key);
    }
});

pickRandomWord();