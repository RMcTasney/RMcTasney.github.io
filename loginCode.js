
// this function will check to see if all credential inputs meet criteria when button is pressed
function checkCreds(){
    // this indicates this function started, in the console
    console.log("checkCreds() started");
    // this variable holds the first name entered into first name input box
    var firstName = document.getElementById("fName").value;
    // this variable holds the last name
    var lastName = document.getElementById("lName").value;
    // this variable holds the badge id
    var badgeNumb = document.getElementById("badgeID").value; 
    // this variable combines and holds the first and last name
    var fullName = firstName + " " + lastName; 

    //Validate fullname 
    
    // if statements start to check criteria
    if((fullName.length > 20) || (fullName.length < 2)){
        // this if statement checks for the correct amount of characters in full name
        document.getElementById("loginStatus").innerHTML = "Invalid Name, Please Resubmit";

    }else if(badgeNumb > 999 || badgeNumb < 100){
        // this if checks for correct amount of characters in badge id, which i have set for 3 characters
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number, Please Resubmit";

    }else{
        // this else statement is what executes when the above 2 pass
        console.log("submission passes!")
        alert("Access Granted! Welcome, " + fullName);
        // this is a new function that moves us to the .html page in the quotes
        location.replace("UATSpace.html");
    }
}

//function done