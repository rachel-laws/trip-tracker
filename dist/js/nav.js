//* Toggle Mobile Navigation
const toggleMobileNav = document.querySelector('#toggleMobileNav');
const navigation = document.querySelector('#navigation');
const navIcon = document.querySelector('#navIcon');

// Toggle nav
export const toggleNav = () => {
  if (navigation.classList.contains('nav__hidden')) {
    // Expand
    navigation.classList.add('nav__visible');
    navigation.classList.remove('nav__hidden');
    toggleMobileNav.setAttribute('aria-expanded', 'true');
    // Change icon
    navIcon.classList.replace('bi-list', 'bi-x-lg');
  } else if (navigation.classList.contains('nav__visible')) {
    // Hide
    navigation.classList.add('nav__hidden');
    navigation.classList.remove('nav__visible');
    toggleMobileNav.setAttribute('aria-expanded', 'false');
    // Change icon
    navIcon.classList.replace('bi-x-lg', 'bi-list');
  }
};

// Close nav
export const closeNavBar = () => {
  navigation.classList.add('nav__hidden');
  navigation.classList.remove('nav__visible');
  toggleMobileNav.setAttribute('aria-expanded', 'false');
  // Change icon
  navIcon.classList.replace('bi-x-lg', 'bi-list');
};
