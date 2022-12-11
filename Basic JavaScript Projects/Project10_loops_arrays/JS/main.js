// count to 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
// Instrument printing
var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// my Function picture array
function Ls460() {
    var Lexus_Ls460 = [];
    Lexus_Ls460 [0] = "Vehicle";
    Lexus_Ls460 [1] = "Comfortable";
    Lexus_Ls460 [2] = "Luxurious";
    Lexus_Ls460 [3] = "Fast";
    document.getElementById("Lexus").innerHTML = "Lexus Ls460 is a luxurious " +
    Lexus_Ls460[0] + ".";
}

// Function Scope
function myFunction() {
    var carName = "Lexus";
    document.getElementById("Example").innerHTML = carName;
}

// Const Keyword
function constant_function(){
    const Musical_Instrument = {type:"guitar",brand:"Fender",color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// LET
var X = 82;
document.write(X);
{
    let X = 33
    document.write("<br>" + X);
}
document.write("<br>" + X);
document.write("<br>")
document.write("<br>")

var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


  // Objects
  function myFunction2() {
  let car = {
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "Red ",
      description : function() {
          return "The car is a " + this.year + this.color + this.make + this.model;
      }
  };
  document.getElementById("Car_Object").innerHTML = car.description();
}