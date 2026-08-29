const password_length_input = document.getElementById("password_length")
const include_lowercase_input = document.getElementById("lowercase")
const include_uppercase_input = document.getElementById("uppercase")
const include_numbers_input = document.getElementById("numbers")
const include_symbols_input = document.getElementById("symbols")
const password_output = document.getElementById("password")
const generate_btn = document.getElementById("generate-btn")
const copy_btn = document.getElementById("copy-btn")
const lower_indicato = document.getElementById("LI")
const upper_indicato = document.getElementById("UI")
const number_indicato = document.getElementById("NI")
const symbol_indicato = document.getElementById("SI")
const lower_inner_indicato = document.getElementById("LII")
const upper_inner_indicato = document.getElementById("UII")
const number_inner_indicato = document.getElementById("NII")
const symbol_inner_indicato = document.getElementById("SII")

let password_length = password_length_input.value
let include_lowercase = true
let include_uppercase = true
let include_numbers = true
let include_symbols = true


lower_indicato.onclick = function () {
    include_lowercase_input.checked = !include_lowercase_input.checked
    if (include_lowercase_input.checked) {
        include_lowercase = true
        lower_indicato.style.backgroundColor = "rgb(255, 251, 251)"
        lower_inner_indicato.style.backgroundColor = "rgb(0, 134, 252)"
        lower_inner_indicato.style.transform = "translateX(35px)"

    }
    else {
        include_lowercase = false
        lower_indicato.style.backgroundColor = "rgba(130, 130, 130, 1)"
        lower_inner_indicato.style.backgroundColor = "rgba(241, 241, 241, 1)"
        lower_inner_indicato.style.transform = "translateX(0px)"
        lower_inner_indicato.transition = " all 1s ease-in-out"

    }

}

upper_indicato.onclick = function () {
    include_uppercase_input.checked = !include_uppercase_input.checked
    if (include_uppercase_input.checked) {
        include_uppercase = true
        upper_indicato.style.backgroundColor = "rgb(255, 251, 251)"
        upper_inner_indicato.style.backgroundColor = "rgb(0, 134, 252)"
        upper_inner_indicato.style.transform = "translateX(35px)"

    }
    else {
        include_uppercase = false
        upper_indicato.style.backgroundColor = "rgba(130, 130, 130, 1)"
        upper_inner_indicato.style.backgroundColor = "rgba(241, 241, 241, 1)"
        upper_inner_indicato.style.transform = "translateX(0px)"
        upper_inner_indicato.transition = " all 1s ease-in-out"

    }

}


number_indicato.onclick = function () {
    include_numbers_input.checked = !include_numbers_input.checked
    if (include_numbers_input.checked) {
        include_numbers = true
        number_indicato.style.backgroundColor = "rgb(255, 251, 251)"
        number_inner_indicato.style.backgroundColor = "rgb(0, 134, 252)"
        number_inner_indicato.style.transform = "translateX(35px)"

    }
    else {
        include_numbers = false
        number_indicato.style.backgroundColor = "rgba(130, 130, 130, 1)"
        number_inner_indicato.style.backgroundColor = "rgba(241, 241, 241, 1)"
        number_inner_indicato.style.transform = "translateX(0px)"
        number_inner_indicato.transition = " all 1s ease-in-out"

    }

}


symbol_indicato.onclick = function () {
    include_symbols_input.checked = !include_symbols_input.checked
    if (include_symbols_input.checked) {
        include_symbols = true
        symbol_indicato.style.backgroundColor = "rgb(255, 251, 251)"
        symbol_inner_indicato.style.backgroundColor = "rgb(0, 134, 252)"
        symbol_inner_indicato.style.transform = "translateX(35px)"

    }
    else {
        include_symbols = false
        symbol_indicato.style.backgroundColor = "rgba(130, 130, 130, 1)"
        symbol_inner_indicato.style.backgroundColor = "rgba(241, 241, 241, 1)"
        symbol_inner_indicato.style.transform = "translateX(0px)"
        symbol_inner_indicato.transition = " all 1s ease-in-out"

    }

}

function generate_password(password_length, include_lowercase, include_uppercase, include_numbers, include_symbols) {

    const lowerChar = 'abcdefghijklmopqrstuvwxyz'
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChar = '0123456789'
    const symbolChar = '!@#$%^&*'

    let allowedcharsc = ``
    let password = ``

    allowedcharsc += include_lowercase ? lowerChar : ``
    allowedcharsc += include_uppercase ? upperChar : ``
    allowedcharsc += include_numbers ? numberChar : ``
    allowedcharsc += include_symbols ? symbolChar : ``

    if (password_length <= 0) {
        return " password length must be atleast 1 character"

    }
    if (allowedcharsc.length === 0) {
        return "password must include atleaset one of the bellow"
    }

    for (let i = 0; i < password_length; i++) {
        const random = Math.floor(Math.random() * allowedcharsc.length)
        password += allowedcharsc[random]
    }
    return password
}

generate_btn.onclick = function () {
    password_length = password_length_input.value
    let password = generate_password(password_length, include_lowercase, include_uppercase, include_numbers, include_symbols)
    password_output.textContent = password

    // Reset copy button state
    const copyIcon = copy_btn.querySelector('.copy-icon');
    const checkIcon = copy_btn.querySelector('.check-icon');
    if (copyIcon && checkIcon) {
        copyIcon.style.display = 'block';
        checkIcon.style.display = 'none';
        copy_btn.style.backgroundColor = '';
        copy_btn.style.borderColor = '';
    }

    if (password.includes(` `)) {
        password_output.style.color = "red"
    } else {
        password_output.style.color = "#02561b"
    }
}

copy_btn.onclick = function () {
    const password = password_output.textContent.trim();
    if (!password ||
        password === "" ||
        password === "password length must be atleast 1 character" ||
        password === "password must include atleaset one of the bellow") {
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        const copyIcon = copy_btn.querySelector('.copy-icon');
        const checkIcon = copy_btn.querySelector('.check-icon');

        if (copyIcon && checkIcon) {
            copyIcon.style.display = 'none';
            checkIcon.style.display = 'block';

            const originalBg = copy_btn.style.backgroundColor;
            const originalBorder = copy_btn.style.borderColor;

            copy_btn.style.backgroundColor = '#28a745';
            copy_btn.style.borderColor = '#1e7e34';

            setTimeout(() => {
                copyIcon.style.display = 'block';
                checkIcon.style.display = 'none';
                copy_btn.style.backgroundColor = originalBg;
                copy_btn.style.borderColor = originalBorder;
            }, 1500);
        }
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}




