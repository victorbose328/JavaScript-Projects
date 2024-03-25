// JS/main.js

// Using the AND (&&) operator
var andTrue = (5 > 2) && (10 < 20);  // true because both conditions are true
var andFalse = (5 > 2) && (10 > 20); // false because one condition is false

// Using the OR (||) operator
var orTrue = (5 > 2) || (10 < 20);   // true because at least one condition is true
var orFalse = (5 > 2) || (10 > 20);  // true because one condition is true

// Output the results
document.write("AND True: " + andTrue + "<br>");
document.write("AND False: " + andFalse + "<br>");
document.write("OR True: " + orTrue + "<br>");
document.write("OR False: " + orFalse + "<br>");