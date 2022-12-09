var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write (X + Y);/////////intentional error 
    console.log(X + Y); ///////////////intentional error with console to debug
}
Add_numbers_1();
Add_numbers_2();
//^ adding two numbers
if (6<7) 
{
    document.write("The left number is smaller than the number on the right.")
}
function get_Date() {
    if (new Date().getHours()< 18) {
        document.getElementById("Greeting").innerHTML = "How are you Today?";
    }
}
//Voting age error will only show old enough as per assignment to show 
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age > 18)
    {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old Enough to Vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;

}
//time Function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is Morning";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is Afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
