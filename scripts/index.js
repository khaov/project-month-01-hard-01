const sandwich = document.querySelector('.sandwich');
const menu = document.querySelector('.menu');

const anchorsItems = document.querySelectorAll('a[href*="#"]');

function togglePopup(targetPopup) {
  targetPopup.classList.toggle('popup_opened');
}

sandwich.addEventListener('click', function (){
  sandwich.classList.toggle('sandwich_toggled');
  togglePopup(menu);
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

