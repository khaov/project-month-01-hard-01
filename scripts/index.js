const anchorsItems = document.querySelectorAll('.link_type_anchor');

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
