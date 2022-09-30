const refs = {
  inputValue: document.querySelector("#font-size-control"),
  textToModify: document.querySelector("#text"),
};

refs.inputValue.addEventListener("input", onScrollChangeText);

function onScrollChangeText(event) {
  refs.textToModify.style.fontSize = `${event.currentTarget.value}px`;
}
