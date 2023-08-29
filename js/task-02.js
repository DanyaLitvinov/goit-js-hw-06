const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

const listItems = ingredients.map(ingredient => {
  const listElements = document.createElement('li');
  listElements.textContent = ingredient;
  listElements.classList.add('item');
  return listElements;
});

listItems.forEach(item => fragment.appendChild(item));

ingredientsList.appendChild(fragment);
