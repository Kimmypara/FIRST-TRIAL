function validate(){
    let errors = " ";
//Get the value of the user input and copy it into variable
    let firstName = document.getElementById("firstName").value;
//Condition 
    if(firstName == ""){
errors = errors+"<li>Please enter First Name</li>"
document.getElementById("firstName").classList.add("inputError");
    }
    else{
        document.getElementById("firstName").classList.remove("inputError");
    }
    



//Get the value of the user input and copy it into variable
    let lastName = document.getElementById("lastName").value;
//Condition 
    if (lastName == ""){
        errors = errors + "<li>Please enter Last Name</li>";
    }
//Condition for radio buttons
    let age = document.getElementsByName("age");

    let ageGroup = false;
    for (i = 0; i < age.length; i++) {
        if (age[i].checked){
             ageGroup = true;
        }     
    }
    if (!ageGroup){
        errors = errors + "<li>Please select age group</li>";
    }

    let email = document.getElementById("email").value;

    if (email == ""){
        errors = errors + "<li>Please enter your email address</li>";
    }
    


//If errors are not empty, meaning if we have errors, add them to the HTML list and show it
    if(errors != ""){
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorList").classList.remove("hidden");
        return false;
    }
//if user has no errors, hide the errorList again
    else{
        document.getElementById("errorList").classList.add("hidden");
        return true;
    }
}