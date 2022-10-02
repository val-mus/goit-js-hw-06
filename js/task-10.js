function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  collection: document.querySelector("#boxes"),
  crateBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  inputField: document.querySelector('[type="number"]'),
};

refs.crateBtn.addEventListener("click", onCreateBtnClickMasteringCollection);
refs.destroyBtn.addEventListener("click", onDestroyBtnClickDestroyCollection);

function onCreateBtnClickMasteringCollection(amount) {
  amount = refs.inputField.value;
  for (let i = 0; i < amount; i += 1) {
    const collectionElement = document.createElement("div");
    collectionElement.style.width = `${30 + i * 10}px`;
    collectionElement.style.height = `${30 + i * 10}px`;
    collectionElement.style.backgroundColor = getRandomHexColor();

    refs.collection.append(collectionElement);
  }
}

function onDestroyBtnClickDestroyCollection() {
  refs.collection.innerHTML = "";
}
