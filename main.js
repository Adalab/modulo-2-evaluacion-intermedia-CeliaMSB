`use strict`

const btn = document.querySelector('.js_btn');
const play = document.querySelector('.js_play');
const result = document.querySelector('.js_result');
const balance = document.querySelector('.js_balance');
const imput = document.querySelector('.js_imput');
const select = document.querySelector('.js_select');

console.log (getRandomNumber)

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function selectNumer() {
    const randomNumber = getRandomNumber(100);
    if (randomNumber < 7) {
        result.innerHTML= `Has ganado el doble de lo apostado`

   } else {
   result.innerHTML= `Has perdido lo apostado`
    }
  }
  function handleClickBtn(ev) {
    ev.preventDefault()
    selectNumer ()
    
}
function numberSelect() {

    select.value = randomNumber;
  }

  function balanceResult () {
    if (randomNumber <7) {
        result.innerHTML= imput.value + balance.innerHTML
    }
else {
    result.innerHTML=imput.value - balance.innerHTML
}
  }

btn.addEventListener('click', handleClickBtn);
