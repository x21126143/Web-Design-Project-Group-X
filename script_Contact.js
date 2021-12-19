//Function when contact form button clicked
function submitForm(){
  var verify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //email format that will be matched off inputted email
  var firstName = document.getElementById("fName").value; //Get first name info
  var lastName = document.getElementById("lName").value; //Get last name info
  var email = document.getElementById("email").value; //Get email name info
  if(firstName. length > 1 && lastName.length > 1 &&email.match(verify)){ //If first and last name is filled out and the email is in correct format
    alert("Your message has been submitted!");  //Successful form alert
  }else{
    alert("Make sure your name email are correct"); //If details incorrect have alert to tell user
  }
}
