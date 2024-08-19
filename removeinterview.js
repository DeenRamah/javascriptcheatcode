index.html

<h1 id="title" class="text-primary">Deen Dev</h1>

<button id="my-btn" class ="btn btn-primary mt-3">click Deen</button>

main.js

const btn = document.getElementById('my-btn')
const title = document.getElementById('title')

btn.addEventListener('click', e=>{
  title.classList.remove('text-primary');
})
