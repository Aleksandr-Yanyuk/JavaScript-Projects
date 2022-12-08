
document.write("YOU HAVE TO CLICK THE BUTTON!!!!");

function My_First_Function () { // Defining a function and naming it
    var str = "This text is Red!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("red"); //using the fontcolor method on str variable
    document.getElementById("Red_Text", "p").innerHTML = result; // putting the value of the result into html element with Red_Text id
}

function myFunction() {  // Defining a function and naming it
    var sentence = "I am Learning"; //Defining a variable and giving it a string value
    sentence += " a lot from this!"; //Writing a function that uses the += operator
    document.getElementById("Concatencate").innerHTML = sentence; //putting the value of the sentence into html element with Concatencate
}
var foo = document.getElementsByTagName("p");