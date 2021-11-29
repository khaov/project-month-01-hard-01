const surfacesList = document.querySelector('.surfaces__list');
const surfaceTemplate = document.querySelector('.surface-template').content;

// Create surfaces item

function createSurfacesItem(titleValue, descriptionValue, imageValue, iconValue) {
  const surfacesItem = surfaceTemplate.firstElementChild.cloneNode(true);
  const surfaceTitle = surfacesItem.querySelector('.surface__title');
  const surfaceDescription = surfacesItem.querySelector('.surface__description');
  const surfaceImage = surfacesItem.querySelector('.surface__image');
  const surfaceIcon = surfacesItem.querySelector('.surface__icon');

  surfaceTitle.textContent = titleValue;
  surfaceDescription.textContent = descriptionValue;
  surfaceImage.src = imageValue;
  surfaceImage.alt = titleValue;
  surfaceIcon.src = iconValue;
  surfaceIcon.alt = titleValue;

  return surfacesItem;
}

// Render surfaces item

function renderSurfacesItem(surfaceTitle, surfaceDescription, surfaceImage, surfaceIcon) {
  surfacesList.append(createSurfacesItem(surfaceTitle, surfaceDescription, surfaceImage, surfaceIcon));
}

// Load surfaces items

surfacesItems.forEach(function (surface) {
  renderSurfacesItem(surface.title, surface.description, surface.image, surface.icon);
})

// Initialize surfaces slider

const surfacesSlider = new Swiper(".surfaces__container", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
