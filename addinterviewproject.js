index.html

<h1 id="title">Deen Dev</h1>
<button class="btn btn-primary mt-3 mt-3" id="my-btn"></button>

main.js

const btn = document.getElementById('my-btn')
const title =  doxument.getElementById('title')

btn.addEventListener('click', e=>{
  title.classList.add('not-visible');
})

styles.css
.not-visible{
  display: none;
}
