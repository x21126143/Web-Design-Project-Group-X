function submitForm(){
  var verify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  if(firstName. length > 1 && lastName.length > 1 &&email.match(verify)){
    alert("Your message has been submitted!");
  }else{
    alert("Make sure your name email are correct");
  }
}
