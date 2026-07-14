const display = document.getElementById("display");

// Helper to check if the last character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/', '%', '.'].includes(char);
}

function appendValue(value) {
    const lastChar = display.value.slice(-1);

    // Prevent starting with an operator (except minus for negative numbers)
    if (display.value === "" && ['+', '*', '/', '%'].includes(value)) {
        return;
    }

    // Prevent entering consecutive operators (e.g., "++" or "+*")
    if (isOperator(lastChar) && isOperator(value)) {
        // Optional: Replace the old operator with the new one
        display.value = display.value.slice(0, -1) + value;
        return;
    }

    // Clear "Error" or "0" automatically when a new number is pressed
    if (display.value === "Error" || (display.value === "0" && value !== '.')) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    // If the screen shows "Error", clear it completely on backspace
    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    let expression = display.value;

    // Sanity check: Don't calculate if empty
    if (!expression) return;

    try {
        // Use Function() instead of eval() - it's safer and better practice
        // It executes the string in an isolated scope
        const result = new Function(`return ${expression}`)();
        
        // Handle edge cases like 1/0 (Infinity) or 0/0 (NaN)
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            // Fix floating point precision bugs (e.g., 0.1 + 0.2 = 0.300000000004)
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = "Error";
    }
}

