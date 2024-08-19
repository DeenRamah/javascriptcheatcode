//when button is clicked it changes color form one to another

<h1 id="title">Deen Dev</h1>
<button class="btn btn-primary mt-3" id="my-btn">Click Deen</button>

main.js

const btn = document.getElementById(my-btn')

btn.addEventListener('click', e=>{
  btn.classList.replace('btn-primary', 'btn-secondary');
})
