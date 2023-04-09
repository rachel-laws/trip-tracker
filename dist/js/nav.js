const toggleMobileNav = document.querySelector('#toggleMobileNav');
const navigation = document.querySelector('#navigation');
const navIcon = document.querySelector('#navIcon');

//* Toggle mobile navigation

export const toggleNav = () => {
  if (navigation.classList.contains('mobile-hidden')) {
    // Expand
    navigation.classList.add('visible-block');
    navigation.classList.remove('mobile-hidden');
    toggleMobileNav.setAttribute('aria-expanded', 'true');
    // Change icon
    navIcon.classList.replace('bi-list', 'bi-x-lg');
  } else if (navigation.classList.contains('visible-block')) {
    // Hide
    navigation.classList.add('mobile-hidden');
    navigation.classList.remove('visible-block');
    toggleMobileNav.setAttribute('aria-expanded', 'false');
    // Change icon
    navIcon.classList.replace('bi-x-lg', 'bi-list');
  }
};

// Force close
export const closeNavBar = () => {
  navigation.classList.add('mobile-hidden');
  navigation.classList.remove('visible-block');
  toggleMobileNav.setAttribute('aria-expanded', 'false');
  // Change icon
  navIcon.classList.replace('bi-x-lg', 'bi-list');
};
