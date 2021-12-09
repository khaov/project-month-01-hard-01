const themeSwitchers = document.querySelectorAll('.switcher__checkbox');
const themeLight = document.querySelector('[media*=prefers-color-scheme][media*=light]');
const themeDark = document.querySelector('[media*=prefers-color-scheme][media*=dark]');

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

// Theme change

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  if (localStorage.getItem('theme') === 'theme-dark') {
    themeDark.media = "all";
    themeLight.media = "not all";
  } else {
    themeLight.media = "all";
    themeDark.media = "not all";
  }
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      themeSwitchers.forEach(function (switcher) {
        switcher.checked = false;
      });
  } else {
      setTheme('theme-dark');
      themeSwitchers.forEach(function (switcher) {
        switcher.checked = true;
      });
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      themeSwitchers.forEach(function (switcher) {
        switcher.checked = true;
      });
  } else {
      setTheme('theme-light');
      themeSwitchers.forEach(function (switcher) {
        switcher.checked = false;
      });
  }
})();
