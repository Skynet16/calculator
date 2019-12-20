//создаю фунцию для сложения чисел
function plus(){
//пишу переменые для подсчёта
var addition = document.getElementsByName('addition');
   var num1, num2, result;
   //первое число
   num1 = document.getElementById('first_number').value;
   //избегаю конкатенации
   num1 = parseInt(num1);
   //второе число
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   //решение
   result = num1+num2;
   document.getElementById('result').innerHTML = result;
}
//создаю фунцию для вычитания чисел
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
//создаю фунцию для умножения чисел
function multiply(){
var multiplication = document.getElementsByName('multiplication');
   var num5, num6, ready;
   num5 = document.getElementById('first_number').value;
   num5 = parseInt(num5);
   num6 = document.getElementById('second_number').value;
   num6 = parseInt(num6);
   ready = num5*num6;
   document.getElementById('result').innerHTML = ready;
}
//создаю фунцию для деления чисел
function share(){
var division = document.getElementsByName('division');
   var num7, num8, go;
   num7 = document.getElementById('first_number').value;
   num7 = parseInt(num7);
   num8 = document.getElementById('second_number').value;
   num8 = parseInt(num8);
   go = num7/num8;
   document.getElementById('result').innerHTML = go;
}
console.log(" Чудаков Иван Дмитриевич")
