// Constructor function using the "new" and "this" keywords
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Function to display the results of the constructor function within an HTML element
function displayPersonInfo() {
    // Create a new Person object using the constructor function
    var person = new Person("John", 30);
    
    // Display the person's information in the HTML element with id "result"
    document.getElementById("result").innerHTML = "Name: " + person.name + ", Age: " + person.age;
}

// Function using a ternary operation with input from the browser
function checkNumber() {
    // Get the input value from the browser
    var inputValue = parseInt(document.getElementById("inputValue").value);
    
    // Check if the input value is even or odd using a ternary operation
    var result = (inputValue % 2 === 0) ? "Even" : "Odd";
    
    // Display the result in the HTML element with id "result"
    document.getElementById("result").innerHTML = "The number is " + result;
}

// Nested function example
function outerFunction() {
    // Define a nested function
    function nestedFunction() {
        return "This is a nested function.";
    }
    
    // Call the nested function
    var result = nestedFunction();
    
    // Display the result in the console
    console.log(result);
}

// Call the outer function
outerFunction();
