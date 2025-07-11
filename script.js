let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.muliple-text', {
      strings: ['Fontend Developer', 'Backend Developer','Web Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDealy: 1200,
      loop: true,
    });