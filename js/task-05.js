const refs = {
  inputValue: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

refs.inputValue.addEventListener("input", (event) => {
  event.currentTarget.value !== ""
    ? (refs.outputText.textContent = event.currentTarget.value)
    : (refs.outputText.textContent = "Anonymous");
});
