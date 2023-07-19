const mBtn = document.querySelector('#mBtn');
const menu = document.querySelector('.menu');

mBtn.onclick = function(){
    menu.classList.toggle("active");
}