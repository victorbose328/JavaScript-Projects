function performOperations() {
    var num1 = 5;
    var num2 = 3;

    var additionResult = num1 + num2;
    var subtractionResult = num1 - num2;
    var multiplicationResult = num1 * num2;
    var divisionResult = num1 / num2;

    var resultString = "Addition: " + additionResult + "<br>" +
                       "Subtraction: " + subtractionResult + "<br>" +
                       "Multiplication: " + multiplicationResult + "<br>" +
                       "Division: " + divisionResult;

    document.getElementById("Math").innerHTML = resultString;
}

performOperations(); // Call the function to display the results immediately


function calculateModulus() {
    var num1 = 10;
    var num2 = 3;

    var modulusResult = num1 % num2;

    var resultString = "Modulus: " + modulusResult;

    document.getElementById("Math").innerText = resultString;
}

calculateModulus(); // Call the function to display the result immediately


function calculateNegation() {
    var num = 5;

    var negationResult = -num;

    var resultString = "Negation: " + negationResult;

    document.getElementById("Math").innerText = resultString;
}

calculateNegation(); // Call the function to display the result immediately


function performIncrementAndDecrement() {
    var num = 5;

    // Increment operator (++)
    var incrementResult = ++num;

    // Decrement operator (--)
    var decrementResult = --num;

    var resultString = "Increment Result: " + incrementResult + "<br>" +
                       "Decrement Result: " + decrementResult;

    document.getElementById("Math").innerHTML = resultString;
}

performIncrementAndDecrement(); // Call the function to display the results immediately


function generateRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    var randomNumber = Math.random();

    var resultString = "Random Number: " + randomNumber;

    document.getElementById("Math").innerText = resultString;
}

generateRandomNumber(); // Call the function to display the result immediately
