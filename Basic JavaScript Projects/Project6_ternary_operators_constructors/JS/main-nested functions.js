// Define the outer function
function outerFunction() {
    // Define the nested function
    function nestedFunction() {
        return "This is the result of the nested function.";
    }
    
    // Call the nested function
    var result = nestedFunction();
    
    // Return the result
    return result;
}

// Function to display the result of the nested function
function displayNestedFunctionResult() {
    // Call the outer function to get the result
    var result = outerFunction();
    
    // Display the result in the HTML
    document.getElementById("Nested_Function").innerHTML = result;
}
