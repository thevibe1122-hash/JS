import { random } from "../modules/random.js";

const choices = [`rock`,`paper`, `scissors`]
const player = document.getElementById(`P_display`)
const cpu = document.getElementById(`C_display`)
const results = document.getElementById(`R_display`)
const RB = document.getElementById(`rock`)
const PB = document.getElementById(`paper`)
const SB = document.getElementById(`scissors`)
const PS =document.getElementById(`P_score`)
const CS =document.getElementById(`C_score`)
let win = 0
let lose = 0

function Play(choice){
    const CPU = random.choice(choices)
    let result = ``
    if (CPU === choice) {
        result = `IT'S A TIE`
    }else{
        switch (choice) {
            case `rock`:
                result =  (CPU===`scissors`)? `YOU WIN`:`YOU LOSE`
                break;
            case `scissors`:
                result =  (CPU===`paper`)? `YOU WIN`:`YOU LOSE`
                break;
            case `paper`:
                result =  (CPU===`rock`)? `YOU WIN`:`YOU LOSE`
                break;
        }
    }
    player.textContent =`Player: ${choice}`
    cpu.textContent =`CPU: ${CPU}`
    results.textContent= result
    results.style.color = (result ===`YOU WIN`)? `green`:(result ===`YOU LOSE`)?`red`:`black`
    win = (result ===`YOU WIN`)? win+1 : win
    lose =  (result ===`YOU LOSE`)? lose += 1 : lose
    PS.textContent = win
    CS.textContent=lose
}


RB.onclick = ()=> Play(`rock`)
SB.onclick = ()=> Play(`scissors`)
PB.onclick = ()=> Play(`paper`)

