
const openMenu = () => {
  $('.nav__main').addClass('open');
};

const closeMenu = () => {
  $('.nav__main').removeClass('open');
};

$('.button__open-menu').click(openMenu)
$('.button__close-menu').click(closeMenu)
