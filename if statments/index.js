// Cache DOM elements to avoid repeatedly querying the DOM
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

myBtn.addEventListener("click", () => {
    const ageInput = myText.value.trim();

    // Check if input is empty
    if (ageInput === "") {
        result1.textContent = "You must enter a value";
        result1.style.color = "black";
        result2.textContent = "";
        return;
    }

    const age = Number(ageInput);

    // Validate age range and check if it's a valid number
    if (isNaN(age) || age < 0) {
        result1.textContent = "You must enter a valid age";
        result1.style.color = "black";
        result2.textContent = "";
        return;
    }

    if (age > 110) {
        result1.textContent = "You must enter a valid age";
        result1.style.color = "black";
        result2.textContent = "";
        return;
    }

    // Determine age classification
    if (age < 18) {
        result1.textContent = "You are a minor!";
        result1.style.color = "red";
        result2.textContent = "";
    } else {
        result1.textContent = "You are an adult!";
        result1.style.color = "green";

        // Assign additional messages based on specific age tiers
        if (age >= 65) {
            result2.textContent = "You can get a senior discount!";
            result2.style.color = "orange";
        } else if (age >= 21) {
            result2.textContent = "You can buy alcohol!";
            result2.style.color = "blue";
        } else {
            result2.textContent = "You can vote! but not drink alcohol";
            result2.style.color = "purple";
        }
    }
});
