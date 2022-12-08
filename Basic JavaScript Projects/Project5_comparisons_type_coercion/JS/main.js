
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

console.log(2 + 2);

document.write(10 == 10); // True
document.write(3 == 11);  // false
document.write(5 > 2 && 10 > 4); // true
document.write(5 > 10 && 10 > 4); // false
document.write(5 > 10 || 10 > 4); // true
document.write(5 > 10 || 10 > 20); // false


//Words and numbers // 
document.write(typeof "Word");
document.write(typeof  3);
document.write("10" + 5);
X = 1000;
Y = 1000;
document.write(X === Y); ///true
document.write(2E310);   //Infinity
document.write(-2E310);  //infinity

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not1_Function() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}

function age_Function() {
    var dob, old_enough;
    dob = document.getElementById("dob_age1").value;
    old_enough = (dob < 18) ? "under age":"of age";
    document.getElementById("dob_age2").innerHTML = old_enough + " to Enter";
}