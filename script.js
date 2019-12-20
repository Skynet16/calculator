function plus(){
var addition = document.getElementsByName('addition');
   var num1, num2, result;
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1+num2;
   document.getElementById('result').innerHTML = result;
}
