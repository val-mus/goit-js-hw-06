const refs = {
  inputValue: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refs.inputValue.addEventListener("input", (event) => {
  refs.outputText.textContent = event.currentTarget.value;
});
