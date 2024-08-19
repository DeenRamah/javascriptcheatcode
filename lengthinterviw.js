//when buttons is clicked it displayes the number of characters that it contains

<h1 id="title">Deen Dev</h1>
<button class="btn btn-primary mt-3" id="my-btn">click Deen</button>

main.js
const btn = document.getElementById('my-btn')
const title = document.getElementById('title')

btn.addEventListener('click', e=>{
  title.textContent = btn.classList.length
})
