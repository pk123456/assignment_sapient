"use strict";
var EnableSubmit;
var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var sbmt = document.getElementById("register");
var age = document.getElementById('age');
var gender = document.getElementById('gender');
var country = document.getElementById('country');

firstName.required = true;
lastName.required = true;
age.required = true;
gender.required = true;
country.required = true;

sbmt.disabled = true;


firstName.addEventListener('keypress', function (e) {
validateInput(e, /^[a-zA-Z\. ]*$/);
});

lastName.addEventListener('keypress', function (e) {
validateInput(e, /^[a-zA-Z\. ]*$/);
});


sbmt.addEventListener('click', function (e) {
    if (age.value < 18 || age.value > 99) {
        customAlert("The age must be a number between 18 and 100", 5000);

    }
    if (firstName.value.length > 20 || lastName.value.length > 20) {
        customAlert("Please enter less than 20 characters", 5000);
    }

})

EnableSubmit = function (val) {

    if (val.checked == true) {
        sbmt.disabled = false;
    }
    else {
        sbmt.disabled = true;
    }
}




function validateInput(e, myregex) {
    if (myregex.test(e.key)) {

    }
    else {
        e.preventDefault();
    }
}


function customAlert(msg, duration) {
    var styler = document.createElement("div");
    styler.setAttribute("style", "border: solid 3px Red;width:auto;height:auto;top:70%;left:40%;background-color:#444;color:Silver");
    styler.innerHTML = "<h4>" + msg + "</h4>";
    setTimeout(function () {
        styler.parentNode.removeChild(styler);
    }, duration);
    document.body.appendChild(styler);
}
