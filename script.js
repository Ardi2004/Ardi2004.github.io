//toggle class active//
const navbarNav = document.querySelector('.navbar-nav');
//ketika lapis di click //
document.querySelector('#lapis-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};


// tutup navbar
const hamburger = document.querySelector('#lapis-menu');

document.addEventListener('click', function (e){
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});