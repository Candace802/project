$(document).ready(function () {
  $('.menuHam').on('click', function () {
    $('.menu').toggle();
  });
});


var menu = document.querySelector('.topHeader')
var menuPosition = menu.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition) {
        menu.style.position = 'fixed';
        menu.style.top = '0px';
        menu.style.background = 'rgba(0, 0, 0, 0.1)';
    } else {
        menu.style.position = 'static';
        menu.style.top = '';
        menu.style.background = 'transparent';
  }
});
