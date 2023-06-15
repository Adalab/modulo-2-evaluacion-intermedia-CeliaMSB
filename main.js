`use strict`
//Creamos las variables para traer el html a JavaScript.
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const play = document.querySelector('.js_play');
const result = document.querySelector('.js_result');
const input = document.querySelector('.js_input');
let balance = 50;


//Es la función que utilizamos para crear un número aleatorio. 
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }


//Creamos un evento para cuando pulsemos el botón
const handleClickButton = (event) => {
  //utilizamos el preventDefault para que no se refresque la página automáticamente 
  event.preventDefault();
  //creamos la constante para traer el valor que ha seleccionado la usuaria, utilizando el parseInt para convertir el string en un number.
  const userNumer = parseInt(select.value);
  //creamos la constante para guardar el número aleatorio que generamos con la funcion getRandomNumber y poniendo entre comillas el numero máximo que queremos conseguir.
  const computerNumber =  getRandomNumber(6);
 //Haremos un condicional para comparar los numeros, el aleatorio con el seleccionado por la usuaria.
 // Cambiaremos con el innerHTML para modificar la frase según el resultado y sumar o restar el saldo.
 if (userNumer === computerNumber) {
  play.innerHTML = '¡Has ganado el doble de lo apostado!';
  const bet = parseFloat(input.value);
  balance = balance + (bet*2);
  result.innerHTML = balance;

 }
 else{
  play.innerHTML = 'Has perdido lo apostado';
  const bet = parseFloat(input.value);
  balance = balance - bet;
  result.innerHTML = balance;

 }

};

btn.addEventListener('click', handleClickButton);
