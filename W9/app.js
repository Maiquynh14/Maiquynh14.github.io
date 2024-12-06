
    function calculate(operation) {
        // Get the values from the input fields
        const num1 = document.getElementById("num1").value.trim();
        const num2 = document.getElementById("num2").value.trim();

        // Validate that inputs are not empty
        if (num1 === "" || num2 === "") {
            document.getElementById("result").innerText = "Please enter both numbers.";
            return;
     }

        // Convert the input strings to numbers and validate them
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            document.getElementById("result").innerText = "Please enter valid numbers.";
            return;
        }

        let result;

        // Perform the calculation based on the operation
        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    document.getElementById("result").innerText = "Cannot divide by 0.";
                    return;
                }
                result = number1 / number2;
                break;
            default:
                document.getElementById("result").innerText = "Invalid operation.";
                return;
        }

        // Display the result
        document.getElementById("result").innerText = `Result: ${result}`;
    }
