
//The email validation function that is ran when the user attempts to login by pressing the submit button.
function validateForm(){

  var signScreen = document.getElementById('signIn');


  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  var email = "hotdog51@hotmail.com";
  var password = "cherries14";


  var emailInput = document.forms["login"]["email"].value;
  var passInput = document.forms["login"]["password"].value;


  if (emailPattern.test(emailInput))
  {
    alert("Correct E-mail format.");
  }
  else{
    alert("Incorrect E-mail format. Please type in the format 'example1@hotmail.com'.")
  }


  if(emailInput=== email && passInput === password)
  {
    alert("Login successful");
    signedIn="You are currently signed in.";  //Change text in paragraph where ID equals 'signedIn'. This is a user notification.
    document.getElementById("signedOut").innerHTML=signedIn;

    div.style.display = "block";
    signScreen.style.display = "none";
  }


  else if ((emailInput === null || emailInput === "") && (passInput === null || passInput === "")){
    alert("You have left all fields blank.")
  }
  else if (emailInput === null || emailInput === ""){
    alert("You must enter valid characters for the username.")
  }
  else if (passInput === null || passInput === ""){
    alert("You must enter valid characters for the password.")
  }
  else{
    alert("One or both of the credentials entered is incorrect. Try again.")
  }

}
