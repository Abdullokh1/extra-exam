const right = document.querySelector('.right-btn');
const lock = document.querySelector('.lock-icon');
const eye = document.querySelector('.eye-icon');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const form = document.querySelector('.form');
const lastLi = document.querySelector('.last-li');
const symbol = document.querySelector('.character');
const wrapper = document.querySelector('.input-wrapper');
const firstLi = document.querySelector('.first-li');

let count = 0;
right.addEventListener('click', ()=>{
  right.innerHTML = `<i class='bx bxs-bullseye'></i>`;
  lock.style.color = '#121327';
  wrapper.style.backgroundColor = '#fff';
  input.style.color = '#000';
  wrapper.style.transition = 'all 0.4s ease';
  count++;

  if (count % 2 == 0){
    right.innerHTML = `<i class='bx icon eye-icon bx-low-vision'></i>`;
    lock.style.color = '#fff';
    wrapper.style.backgroundColor = '#121327';
    wrapper.style.transition = 'all 0.4s ease';
    input.style.color = '#fff';
  }
})


form.addEventListener('keyup', (e)=>{
  e.preventDefault();
 
  let val = input.value;
  let email = '@';
  list.style.opacity = '1';

  
  if (val.length > 8){
    lastLi.innerHTML = `<i class='bx bx-check' ></i>More than 8 character`;
    lastLi.style.filter = 'brightness(1)';
  } 
  else{
    lastLi.innerHTML = `<i class='bx bx-x' ></i>More than 8 character`;
    lastLi.style.filter = 'brightness(0.7)';
  }

  if (val.includes(email)){
    symbol.innerHTML = `<i class='bx bx-check' ></i>Special character`;
    symbol.style.filter = 'brightness(1)';
  }
  else{
    symbol.innerHTML = `<i class='bx bx-x' ></i>Special character`;
    symbol.style.filter = 'brightness(0.6)';
  }

 


})


