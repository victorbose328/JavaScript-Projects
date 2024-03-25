
var exampleVariable = "Hello";


document.write("The data type of exampleVariable is: " + typeof exampleVariable + "<br>");


var combinedExpression = "The answer is: " + 42;


document.write(combinedExpression + "<br>");


document.write("Comparison using == operator: " + (5 == "5") + "<br>");


document.write("Comparison using === operator: " + (5 === "5") + "<br>");


document.write("Comparison using > operator: " + (10 > 5) + "<br>");


document.write("Comparison using < operator: " + (10 < 5) + "<br>");


document.write("Logical AND operation: " + (true && false) + "<br>");


document.write("Logical OR operation: " + (true || false) + "<br>");


document.write("Logical NOT operation: " + (!true) + "<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(1>2);
}