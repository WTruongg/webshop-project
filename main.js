var menuBar = document.querySelector(".menu-bars i")
var navbar = document.querySelector(".navbar")
menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active')
    menuBar.classList.toggle('fa-xmark')
})