// A function with HTML and JS using ternary operation with input from browser
function Ride_Function() {
    var Height = document.getElementById("Height").value
    var Can_ride = Height < 52 ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

// Constructor function utilizing 'new' and 'this' keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// A function to display the results of the constructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// Nested function
function add_String() {
    var start_string = "Hello";
    
    function Adding(str) {
        start_string = strart_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}

