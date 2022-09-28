const categoriesListRef = document.querySelector("#categories");
console.log("Number of categories: ", categoriesListRef.children.length);

const categoryItemRef = document.querySelectorAll("#categories > .item");

categoryItemRef.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
