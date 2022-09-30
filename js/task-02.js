const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientItem = (ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");

  return elementRef;
};

const makeIngredientsMarkup = ingredients.map(makeIngredientItem);

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...makeIngredientsMarkup);
