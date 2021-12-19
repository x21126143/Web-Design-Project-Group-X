//Function when first product button is clicked
function bill1(){
  var num = document.getElementById("quantity1").value; //get the value the user inputted
  var total = 0;  //create an empty variable
  if(num > 0){  //if the number is greater than 0
    total = num * 49.99 //total variable equals the number the user netered multiplied by the product price
    alert("Your total bill is: " + '€' + total);  //an alert is put up for the total bill price
  }else if(num <= 0){ //If the number is 0 or a minus figure the user will be promted to try again
    alert("Enter a valid number");
}
}

function bill2(){
  var num = document.getElementById("quantity2").value;
  var total = 0;
  if(num > 0){
    total = num * 69.99
    alert("Your total bill is: " + '€' + total);
  }else if(num <= 0){
    alert("Enter a valid number");
}
}

function bill3(){
  var num = document.getElementById("quantity3").value;
  var total = 0;
  if(num > 0){
    total = num * 14.99
    alert("Your total bill is: " + '€' + total);
  }else if(num <= 0){
    alert("Enter a valid number");
}
}

function bill4(){
  var num = document.getElementById("quantity4").value;
  var total = 0;
  if(num > 0){
    total = num * 29.99
    alert("Your total bill is: " + '€' + total);
  }else if(num <= 0){
    alert("Enter a valid number");
}
}
