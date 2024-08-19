index.html

<h1 id="title" class="text-primary">Deen Dev</h1>

<button class="btn btn-primary mt-3" id="my-btn">click Deen</button>

main.js

const btn=document.getElementById('my-btn')

btn.addEventListener('click', e=>{
  title.classList.toggle('not-visiblr');
})
