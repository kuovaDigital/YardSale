console.log('javascript listo')

const menuDesk = document.querySelector('.menu-desk');
const navMail = document.querySelector('.nav-mail');
const menuMob = document.querySelector('.menu-mobile') 
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')



navMail.addEventListener('click', toggleMenuDesk);
openMenu.addEventListener('click', openMenuMob);
closeMenu.addEventListener('click', closeMenuMob);

function toggleMenuDesk(){
    console.log('click');
    menuDesk.classList.toggle('d-lg')
} 

function openMenuMob(){
    console.log('tap');
    menuMob.classList.remove('d-none');
} 

function closeMenuMob(){
    console.log('tap');
    menuMob.classList.add('d-none');
}