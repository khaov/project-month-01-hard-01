const bicyclesList = document.querySelector('.bicycles__list');
const bicycleTemplate = document.querySelector('.bicycle-template').content;

// Create bicycles item

function createBicyclesItem(imageValue, modelValue, linkValue) {
  const bicyclesItem = bicycleTemplate.querySelector('.bicycles__item').cloneNode(true);
  const bicycleLink = bicyclesItem.querySelector('.bicycle__link');
  const bicycleImage = bicyclesItem.querySelector('.bicycle__image');
  const bicycleModel = bicyclesItem.querySelector('.bicycle__model');

  bicycleLink.href = linkValue;
  bicycleLink.title = modelValue;
  bicycleImage.src = imageValue;
  bicycleImage.alt = modelValue;
  bicycleModel.textContent = modelValue;

  return bicyclesItem;
}

// Render bicycles item

function renderBicyclesItem(bicycleLink, bicycleImage, bicycleModel) {
  bicyclesList.append(createBicyclesItem(bicycleImage, bicycleModel, bicycleLink));
}

// Load bicycles items

function loadBicyclesItems(bicyclesData) {
  const activeBicycles = bicyclesData.filter(function (category) {
    if (category.active === 'true') {
      return category.data;
    }
  });

  activeBicycles[0]['data'].forEach(function (bicycle) {
    renderBicyclesItem(bicycle.link, bicycle.image, bicycle.model);
  })
}

loadBicyclesItems(bicyclesItems);
