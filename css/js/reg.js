let email1 = document.getElementById("Email1");
let pwd1 = document.getElementById("Password1");

let phone1 = document.getElementById("Phone");
// let pwd2 = document.getElementById("RePassword1 ");
let fname = document.getElementById("Fname");
let lname = document.getElementById("Lname");

function valPhone() {

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone1.value.match(phoneno)) {
        alert("valid Phone Number");
        return true;
    } else {
        alert("Not a valid Phone Number");
        phone1.focus();
        return false;
    }

}

function valname() {
    var regName = /^[a-zA-Z]+$/;
    var name = fname.value;
    if (!regName.test(name)) {
        alert('Please enter your  name in characters).');
        fname.focus();
        return false;
    } else {
        alert('Valid name given.');
        return true;
    }
}

function valemail() {
    //  alert(email1.value);

    if (!(email1.value == " ")) {
        var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,3}$/i;
        if (reg.test(email1.value)) {
            return true;
        }
        alert('Please enter valid email.');
        email1.focus();
        return false;
    }

}

function validatePassword(password) {
    //alert(password);
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]"); // Uppercase Alpabates
    matchedCase.push("[0-9]"); // Numbers
    matchedCase.push("[a-z]"); // Lowercase Alphabates

    // Check the conditions
    var passed = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            passed++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
    document.getElementById("msg").style.backgroundColor = "cyan";

}

function validate() {
    alert(fname.value);
    alert(lname.value);
    alert(email1.value);
    alert(pwd2.value);
    alert(pwd1.value);
    alert(phone1.value);
    /*if ((email1.value == " ") || (pwd1.value == " ") || (fname.value == " ") || (lname.value == " ") || (pwd2.value == " ") || (phone1.value == " ")) {
        alert('Mandatory fields cannot be left blank');
        //  window.location.href = "login.html?flag=F ";

    } else {

        alert('Successful');
    }*/
    return false;
}