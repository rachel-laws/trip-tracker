//* Toggle Mobile Navigation
const toggleMobileNav = document.querySelector('#toggleMobileNav');
const navBar = document.querySelector('#navBar');
const navIcon = document.querySelector('#navIcon');

// Toggle nav
export const toggleNav = () => {
  if (navBar.classList.contains('nav__hidden')) {
    // Expand
    navBar.classList.add('nav__visible');
    navBar.classList.remove('nav__hidden');
    toggleMobileNav.setAttribute('aria-expanded', 'true');
    // Change icon
    navIcon.classList.replace('bi-list', 'bi-x-lg');
  } else if (navBar.classList.contains('nav__visible')) {
    // Hide
    navBar.classList.add('nav__hidden');
    navBar.classList.remove('nav__visible');
    toggleMobileNav.setAttribute('aria-expanded', 'false');
    // Change icon
    navIcon.classList.replace('bi-x-lg', 'bi-list');
  }
};

// Close nav
export const closeNavBar = () => {
  navBar.classList.add('nav__hidden');
  navBar.classList.remove('nav__visible');
  toggleMobileNav.setAttribute('aria-expanded', 'false');
  // Change icon
  navIcon.classList.replace('bi-x-lg', 'bi-list');
};
