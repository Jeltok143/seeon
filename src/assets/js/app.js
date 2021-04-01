let burgerNav = document.querySelector('.toggler');
let burgerClose = document.querySelector('.btn__white');
let buttonOrder = document.querySelector('.btn__orange');
let mainLogo = document.querySelector('.header__icon');
let buttonLine = document.querySelector('.btn__line');
let mainContact = document.querySelector('.main__message');


burgerNav.onclick = function () {
  buttonOrder.classList.toggle('active-menu');
  mainLogo.classList.toggle('header__icon--white');
  buttonLine.classList.toggle('btn__active');
  mainContact.classList.toggle('main__message--active');
  // burgerClose.classList.toggle('burger-active');

  if (buttonOrder.classList.contains('active-menu')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

//Fixed header

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollPos = 200;
  let header = document.querySelector('.header');

  if (document.body.scrollTop > scrollPos ||
    document.documentElement.scrollTop > scrollPos) {
    header.classList.add('active');
  } 
  else
  {
    header.classList.remove('active');
  }
}