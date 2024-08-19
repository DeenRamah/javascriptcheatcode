//when the button s clicked the title disspears

<h1 id="title">Deen Dev</h1>
<button class="btn btn-primary mt-3" id="my-btn">Click Deen</button>

main.js

const btn = document.getElementById('my-btn')
const title = document.getElementById('title')

btn.addEventListener('click', e=>{
  if(!title.classList.contains('text-primary')){
    title.classList.add('not-visible');
  }
})
