const burger = document.getElementsByClassName('header__btn')[0]
const nav = document.getElementsByClassName('header__menu-list')[0]
const arrows1 = document.getElementsByClassName('btn__span1')[0]
const arrows2 = document.getElementsByClassName('btn__span2')[0]
const arrows3 = document.getElementsByClassName('btn__span3')[0]
burger.addEventListener('click', ()=> {
    nav.classList.toggle('active')
    arrows1.classList.toggle('active')
    arrows2.classList.toggle('active')
    arrows3.classList.toggle('active')

})