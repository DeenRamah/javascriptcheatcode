//this reloads the current document and works same as the reloaded button in your browser.
//this can be really handy when implementing a refresh button in the user interfaces

const butnrefresh = document.querySelector('button')

butnrefresh.addEventListener('click', ()=>{
  loaction.reload()
})
