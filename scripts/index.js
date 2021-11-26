const bicyclesList = document.querySelector('.bicycles__list');
const bicycleTemplate = document.querySelector('.bicycle-template').content;

// Create

function createBicycleItem(imageValue, modelValue, linkValue) {
  const bicyclesItem = bicycleTemplate.querySelector('.bicycles__item').cloneNode(true);
  const bicycleImage = bicyclesItem.querySelector('.bicycle__image');
  const bicycleModel = bicyclesItem.querySelector('.bicycle__model');
  const bicycleLink = bicyclesItem.querySelector('.bicycle__link');

  bicycleImage.textContent = imageValue;
  bicycleModel.textContent = modelValue;
  bicycleLink.textContent = linkValue;

  return bicyclesItem;
}

// Render

function renderBicyclesItem(bicycleImage, bicycleModel, bicycleLink) {
  bicyclesList.append(createBicycleItem(bicycleImage, bicycleModel, bicycleLink));
}

// Load

function loadBicyclesItems(bicyclesData) {
  const activeBicycles = bicyclesData.filter(function (item) {
    if (item.active === 'true') {
      return item.data;
    }
  });

  activeBicycles[0]['data'].forEach(function (item) {
    renderBicyclesItem(item.image, item.model, item.link);
  })

}

loadBicyclesItems(bicyclesItems);
