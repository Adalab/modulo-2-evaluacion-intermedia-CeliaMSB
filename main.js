`use strict`
//Creamos las variables para traer el html a JavaScript.
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const play = document.querySelector('.js_play');
const result = document.querySelector('.js_result');
const input = document.querySelector('.js_input');


//variable para el resultado de la apuesta

let balance = 50;


//Es la función que utilizamos para crear un número aleatorio que nos da el ejercicio. 
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }
// He creado una función para que se muestre el número creado aleatoriamente para que la usuaria pueda ver el número generado  y mejorar la experiencia en el juego.
  function renderRandomNumber () {
    const winNumer  = document.getElementById("win");
    const computerNumber =  getRandomNumber(6);
    winNumer.innerHTML = computerNumber;


  }

//Creamos una funcion para calcular el saldo cuando la usuaria gane.
 const addUserBet = () => {
  //constante para guardar el valor del imput
  const bet = parseFloat(input.value);
  //traemos la variable de balance y la multiplicamos por la apuesta
  balance = balance + (bet*2);
  //mostramos el resultado cambiarndo el innerHTML
  result.innerHTML = balance;
 }
//Creamos una funcion para restar el valor cuando la usuaria pierde.
 const decreaseUserBet = () => {
  const bet = parseFloat(input.value);
  balance = balance - bet;
  result.innerHTML = balance;

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
  addUserBet();

 }
 else{
  play.innerHTML = 'Has perdido lo apostado';
  decreaseUserBet();
 }
 renderRandomNumber()
};
//Escuchamos el evento.
btn.addEventListener('click', handleClickButton);
