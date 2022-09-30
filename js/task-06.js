const refs = {
  inputField: document.querySelector("#validation-input"),
};

refs.inputField.addEventListener("blur", isInputLengthCorrect);
refs.inputField.addEventListener("focus", onFocusReset);

function isInputLengthCorrect(event) {
  event.currentTarget.value.length ===
  Number(refs.inputField.getAttribute("data-length"))
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
}

function onFocusReset(event) {
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.remove("invalid");
}
