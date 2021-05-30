//add cart function//

var btn = document.getElementById('btn');
var spn = document.getElementById('span');
let count = 0;

function cot() {
    count += 1;
    document.getElementById('span').innerHTML = count;
    console.log(count);

}


function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false//
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*length of name is too short!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (name.length < 5) {
        seterror("email", "*Email length is too long!");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (name.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 charcters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (password.length < 6) {
        seterror("cpass", "*Password and confirm password should be match!");
        returnval = false;
    }
}