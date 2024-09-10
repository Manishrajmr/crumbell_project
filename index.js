const menuToggle = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('.navbar');

// menuToggle.addEventListener('click', function () {
//   navbar.classList.toggle('active');
// });


menuToggle.addEventListener('click', function () {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')) {
    menuToggle.innerHTML = '<ion-icon name="close-outline" aria-hidden="true"></ion-icon>';
  } else {
    menuToggle.innerHTML = '<ion-icon name="menu-outline" aria-hidden="true"></ion-icon>';
  }
});