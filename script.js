//Функция сложения
function plus(){
  //Переменные для функций
  var num1 , num2 , result;
  //Первое число
   num1 = document.getElementById('first_number').value;
   //Обход конкатенации
   num1 = parseInt(num1);
   //Второе число
   num2 = document.getElementById('second_number').value;
   //Обход конкатенации
   num2 = parseInt(num2);
   //Решение
   result = num1 + num2;
   document.getElementById('result').innerHTML = result;
}
//Функция вычитания
function minus(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 - num2;
   document.getElementById('result').innerHTML = result;
}
//Функция умножения
function multiply(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 * num2;
   document.getElementById('result').innerHTML = result;
}
//Функция деления
function divide(){
   num1 = document.getElementById('first_number').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('second_number').value;
   num2 = parseInt(num2);
   result = num1 / num2;
   document.getElementById('result').innerHTML = result;
}
console.log(" Калькулятор готов :) ");
