const surfacesList = document.querySelector('.surfaces__list');
const surfaceTitle = document.querySelector('.surface__title');
const surfaceDescription = document.querySelector('.surface__description');
const surfaceTemplate = document.querySelector('.surface-template').content;

// Create surfaces item

function createSurfacesItem(titleValue, descriptionValue, imageValue, iconValue) {
  const surfacesItem = surfaceTemplate.firstElementChild.cloneNode(true);
  const surfaceImage = surfacesItem.querySelector('.surface__image');
  const surfaceIcon = surfacesItem.querySelector('.surface__icon');

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

const surfacesSlider = new Swiper(".surfaces__slider", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  on: {
    slideChange: function () {
      const surfaceIndex = this.realIndex;
      surfaceTitle.textContent = surfacesItems[surfaceIndex].title;
      surfaceDescription.textContent = surfacesItems[surfaceIndex].description;
    },
  }
});
