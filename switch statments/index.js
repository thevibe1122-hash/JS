let day = 4
const heading = document.getElementById('myheading')
const paragraph = document.getElementById('myp')
let Testscore = 720
let lettergrade;

switch (day) {
    case 1:
        heading.textContent = 'Monday'
        break
    case 2:
        heading.textContent = 'Tuesday'
        break;
    case 3:
        heading.textContent = 'Wednesday'
        break;
    case 4:
        heading.textContent = 'Thursday'
        break;
    case 5:
        heading.textContent = 'Friday'
        break;
    case 6:
        heading.textContent = 'Saturday'
        break;
    case 7:
        heading.textContent = 'Sunday'
        break;
    default:
        heading.textContent = 'Invalid day'
        break;
}

switch (true) {
    case Testscore >= 90:
        lettergrade = 'A'
        break;
    case Testscore >= 80:
        lettergrade = 'B'
        break;
    case Testscore >= 70:
        lettergrade = 'C'
        break;
    case Testscore >= 60:
        lettergrade = 'D'
        break;
    case Testscore >= 50:
        lettergrade = 'F'
        break;
    default:
        lettergrade = 'Invalid Testscore'
        break;
}

paragraph.textContent = lettergrade;