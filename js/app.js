let arrow=document.querySelector('.arrow'),
button=document.querySelector('.button');

button.addEventListener('mouseover',()=>{
    arrow.classList.toggle('arr');
    arrow.classList.toggle('arrow');
})
