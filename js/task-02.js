const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const makeIngredientItem = (ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");

  return elementRef;
};

const makeIngredientsMarkup = ingredients.map(makeIngredientItem);

ingredientsList.append(...makeIngredientsMarkup);
