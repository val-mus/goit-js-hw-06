const refs = {
  categoriesListRef: document.querySelector("#categories"),
};

const categoryItemRef = refs.categoriesListRef.querySelectorAll(".item");
console.log(categoryItemRef.length);

categoryItemRef.forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
});
