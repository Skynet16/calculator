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
function minus(){
var subtraction = document.getElementsByName('subtraction');
   var num3, num4, reshenie;
   num3 = document.getElementById('first_number').value;
   num3 = parseInt(num3);
   num4 = document.getElementById('second_number').value;
   num4 = parseInt(num4);
   reshenie = num3-num4;
   document.getElementById('result').innerHTML = reshenie;
}
