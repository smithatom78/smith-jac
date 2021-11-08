let email1 = document.getElementById("Email1 ");
let pwd1 = document.getElementById("Password1 ");

function valemail() {
    //alert(document.myform.getElementById("Email1 ").value);

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



function validate() {
    //alert(email1.value);
    if ((email1.value == " ") && (pwd1.value == " ")) {
        window.location.href = "login.html?flag=F ";

    } else {

        window.location.href = "index.html ";
    }
    return false;
}