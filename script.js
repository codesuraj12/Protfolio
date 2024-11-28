const daw = document.querySelector('.dark');
const section= document.querySelector('.first')

daw.addEventListener('click', () => {
  daw.classList.toggle('move');
 document.body.classList.toggle('color');
 document.querySelectorAll('h1').forEach(h1 => {
  h1.classList.toggle('bg-h1');
});


});

function showMenu(){
  const menu = document.querySelector('.menu')
  menu.style.display = "flex"
}
function hideMenu(){
  const menu = document.querySelector('.menu')
  menu.style.display = "none"
}