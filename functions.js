const openNavbar = () => {
  const hamburgerElement = document.getElementById('hamburger');
  const navbarMenu = document.getElementById('navbar-menu');

  if (hamburgerElement.classList.contains('is-active')) {
    hamburgerElement.classList.remove('is-active');
    navbarMenu.style.display = 'none';
  } else {
    hamburgerElement.classList.add('is-active');
    navbarMenu.style.display = 'inherit';
  }
}

const collapse = (id) => {
  const content = document.getElementById(id);
  const icon = document.getElementById(`${id}-icon`);

  if (content.style.display.length === 0 || content.style.display === 'none') {
    content.style.display = 'inherit';
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  } else {
    content.style.display = 'none'
    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');
  }
}
