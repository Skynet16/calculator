function plus(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 + num2;
   document.getElementById('result').innerHTML = result;
}
function minus(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 - num2;
   document.getElementById('result').innerHTML = result;
}
function multiply(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 * num2;
   document.getElementById('result').innerHTML = result;
}
function divide(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 / num2;
   document.getElementById('result').innerHTML = result;
}
