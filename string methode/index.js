// Target username with leading and trailing spaces for rich demonstration of string methods
const username = "  CodeWizard_99  ";

// Display the full username in the header badge
document.getElementById('myheading').textContent = username;

/**
 * Renders the method execution expression and its evaluated output inside the target element.
 * @param {string} id - The ID of the paragraph element
 * @param {string} expression - The JavaScript code expression as a string
 * @param {*} value - The evaluated result of the expression
 * @param {'string'|'number'|'boolean'} type - The data type of the result for custom syntax highlighting
 */
function renderMethodResult(id, expression, value, type) {
    const el = document.getElementById(id);
    if (!el) return;

    let displayVal = value;
    let typeClass = 'string-literal';

    if (type === 'string') {
        displayVal = `"${value}"`;
        typeClass = 'string-literal';
    } else if (type === 'number') {
        typeClass = 'number-literal';
    } else if (type === 'boolean') {
        typeClass = 'boolean-literal';
    }

    el.innerHTML = `
        <div class="expr-line">${expression}</div>
        <div class="result-line">
            <span class="result-label">Result:</span>
            <span class="result-val ${typeClass}">${displayVal}</span>
        </div>
    `;
}

// Render each string property and method dynamically
renderMethodResult('myp', 'username.length', username.length, 'number');
renderMethodResult('myp1', 'username.charAt(2)', username.charAt(2), 'string');
renderMethodResult('myp2', 'username.indexOf("W")', username.indexOf("W"), 'number');
renderMethodResult('myp3', 'username.lastIndexOf("9")', username.lastIndexOf("9"), 'number');
renderMethodResult('myp4', 'username.trim()', username.trim(), 'string');
renderMethodResult('myp5', 'username.toUpperCase()', username.toUpperCase(), 'string');
renderMethodResult('myp6', 'username.toLowerCase()', username.toLowerCase(), 'string');
renderMethodResult('myp7', 'username.startsWith("  Code")', username.startsWith("  Code"), 'boolean');
renderMethodResult('myp8', 'username.endsWith("99  ")', username.endsWith("99  "), 'boolean');
renderMethodResult('myp9', 'username.includes("Wizard")', username.includes("Wizard"), 'boolean');