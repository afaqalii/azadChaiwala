const MenuBtn = document.querySelector('.menuBtn')
const ul = document.querySelector('ul')


MenuBtn.addEventListener('click', ()=> {
  ul.classList.toggle("ulClass")    
})

ul.addEventListener("click", ()=> {
    ul.classList.toggle('ulClass')
})