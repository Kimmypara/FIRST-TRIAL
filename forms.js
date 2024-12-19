function validate(){
    let errors = " ";
//Get the value of the user input and copy it into variable
    let firstName = document.getElementById("firstName").value;
//Condition 
    if(firstName == ""){
errors = errors+"<li>Please enter First Name</li>"
    }
//Get the value of the user input and copy it into variable
    let lastName = document.getElementById("lastName").value;
//Condition 
    if (lastName == ""){
        errors = errors + "<li>Please enter Last Name</li>";
    }
//If errors are not empty, meaning if we have errors, add them to the HTML list and show it
    if(errors != ""){
        document.getElementById("errorList").innerHTML = error;
        document.getElementById("errorList").classList.remove("hidden");
        return false;
    }
//if user has no errors, hide the errorList again
    else{
        document.getElementById("errorList").classList.add("hidden");
        return true;
    }
}