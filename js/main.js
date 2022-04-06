const right = document.querySelector('.right-btn');
const left = document.querySelector('.left-btn');
const lock = document.querySelector('.lock-icon');
const eye = document.querySelector('.eye-icon');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const form = document.querySelector('.form');
const lastLi = document.querySelector('.last-li');
const symbol = document.querySelector('.character');

right.addEventListener('click', ()=>{
  right.innerHTML = `<i class='bx bxs-bullseye'></i>`;
  input.style.backgroundColor = '#fff';
  input.style.transition = 'all 0.4s ease';
  input.style.color = '#000';
  lock.style.color = '#121327';
})



form.addEventListener('keydown', ()=>{
  let val = input.value;
  let value = input.value.includes('@');
  list.style.opacity = '1';
  let text = lastLi.textContent
  if (val.length > 8){
    lastLi.innerHTML = `<i class='bx bx-check' ></i>More than 8 character`;
  } 
   if (val == value){
     symbol.innerHTML = `<i class='bx bx-check' ></i>Special Character`;
  }
})


