const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

const closeHomeMenu = document.querySelector('#closeHomeMenu');

const closeMenuMenu = document.querySelector('#closeMenuMenu');

const closeContactMenu = document.querySelector('#closeContactMenu');

const closeLocationMenu = document.querySelector('#closeLocationMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
closeHomeMenu.addEventListener('click', close);
closeMenuMenu.addEventListener('click', close);
closeContactMenu.addEventListener('click', close);
closeLocationMenu.addEventListener('click', close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
    mainMenu.style.display = 'none';
}