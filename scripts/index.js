const sandwichButton = document.querySelector('.sandwich');
const menuPopup = document.querySelector('.menu');
const menuLinks = menuPopup.querySelectorAll('.menu__navigation-link');
const anchorsItems = document.querySelectorAll('a[href*="#"]');

// Pop-up

function togglePopup(targetPopup) {
  targetPopup.classList.toggle('popup_opened');
}

// Mobile navigation

function openMenu() {
  sandwichButton.classList.toggle('sandwich_toggled');
  togglePopup(menuPopup);
}

sandwichButton.addEventListener('click', function () {
  openMenu();
});

menuLinks.forEach(function (link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    openMenu();
  });
});

// Smooth scroll

anchorsItems.forEach(function (anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetAnchor = anchor.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetAnchor);

    const headerOffset = document.querySelector('.header').offsetHeight;
    const sectionPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = sectionPosition - headerOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
  });
});

