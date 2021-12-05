const surfacesList = document.querySelector('.surfaces__list');
const surfacesTitle = document.querySelector('.surfaces__title');
const surfacesDescription = document.querySelector('.surfaces__description');
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
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    }
  },
  on: {
    slideChange: function () {
      const surfaceIndex = this.realIndex;

      surfacesTitle.textContent = surfacesItems[surfaceIndex].title;
      surfacesDescription.textContent = surfacesItems[surfaceIndex].description;

    },
    transitionStart: function(){
      const surfaces = document.querySelectorAll('.surface');
      const activeSurface = document.querySelector('.swiper-slide-active > .surface');

      surfaces.forEach(function(surface){
        surface.classList.remove('surface_active');
      });

      activeSurface.classList.add('surface_active');
    },
  }
});
