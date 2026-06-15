const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "%") {
            try {
                const expression = display.value;

                const match = expression.match(/^(\d+)([+\-*/])(\d+)$/);

                if (match) {
                    const num1 = parseFloat(match[1]);
                    const operator = match[2];
                    const num2 = parseFloat(match[3]);

                    const percentValue = (num1 * num2) / 100;

                    if (operator === "+") {
                        display.value = num1 + percentValue;
                    }
                    else if (operator === "-") {
                        display.value = num1 - percentValue;
                    }
                    else if (operator === "*") {
                        display.value = percentValue;
                    }
                    else if (operator === "/") {
                        display.value = num1 / (num2 / 100);
                    }
                }
                else {
                    display.value = parseFloat(expression) / 100;
                }
            }
            catch {
                display.value = "Error";
            }
        }

        else if (value === "=") {
            try {
                display.value = eval(display.value);
            }
            catch {
                display.value = "Error";
            }
        }

        else {
            display.value += value;
        }
    });

});

document.addEventListener("keydown", (event) => {

    if ("0123456789+-*/.".includes(event.key)) {
        display.value += event.key;
    }

    else if (event.key === "%") {
        const expression = display.value;

        try {
            const match = expression.match(/^(\d+)([+\-*/])(\d+)$/);

            if (match) {
                const num1 = parseFloat(match[1]);
                const operator = match[2];
                const num2 = parseFloat(match[3]);

                const percentValue = (num1 * num2) / 100;

                if (operator === "+") {
                    display.value = num1 + percentValue;
                }
                else if (operator === "-") {
                    display.value = num1 - percentValue;
                }
                else if (operator === "*") {
                    display.value = percentValue;
                }
                else if (operator === "/") {
                    display.value = num1 / (num2 / 100);
                }
            }
            else {
                display.value = parseFloat(expression) / 100;
            }
        }
        catch {
            display.value = "Error";
        }
    }

    else if (event.key === "Enter") {
        try {
            display.value = eval(display.value);
        }
        catch {
            display.value = "Error";
        }
    }

    else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (event.key === "Escape") {
        display.value = "";
    }
});
