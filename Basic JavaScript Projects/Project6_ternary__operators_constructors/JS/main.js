function age_Function() {
    var dob, old_enough;
    dob = document.getElementById("dob_age1").value;
    old_enough = (dob < 18) ? "under age":"of age";
    document.getElementById("dob_age2").innerHTML = old_enough + " to Enter";
}

function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Roman = new Vehicle ("Toyota","prius", 2008, "White");
var Leo = new Vehicle ("Audi", "s4", 2018,"Red");
var Alex = new Vehicle ("Lexus"," Lexus",2007,"Black")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Alex Drives a " +Alex.Vehicle_Color + "-colored" + Alex.Vehicle_Model + " manufactured in " + Alex.Vehicle_Year
}
var X = 10;
var Y = "Charlie";

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}