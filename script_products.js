function bill1(){
  var num = document.getElementById("quantity1").value;
  var total = 0;
  if(num > 0){
    total = num * 49.99
    alert("Your total bill is: " + '€' + total);
  }else if(num <= 0){
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
