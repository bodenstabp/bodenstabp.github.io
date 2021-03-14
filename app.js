const navToggle = document.querySelector('.nav__toggle');
const links = document.querySelectorAll('.nav-list__item')
const heroButton = document.querySelector('.hero__button')

navToggle.addEventListener('click', () => {
   document.body.classList.toggle('nav__open') 
})

links.forEach(link => (
    link.addEventListener('click', () => {
        document.body.classList.remove('nav__open')
    })
))

heroButton.addEventListener ( 'click', () => document.querySelector('#portfolio').scrollIntoView() )