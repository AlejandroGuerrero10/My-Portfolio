//CONSTANTES
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');


//EVENTO DE "validation"
ipad.addListener(validation);


//FUNCTION PARA MONSTRAR O ESCONDER EL MENU
function hideShow () {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  }
  else {
    menu.classList.add('is-active');
  }
  
}


//FUNCTION PARA DISPARA EL "Listener"
function validation (event) {
  if (event.matches) {
    //EVENTO DEL "click"
    burgerButton.addEventListener('click', hideShow);
  }
  else {
    burgerButton.removeEventListener('click', hideShow);
  }
}

validation(ipad);//cuando la padina carga 