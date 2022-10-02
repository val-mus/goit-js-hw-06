function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetText: document.querySelector(".color"),
  widgetBtn: document.querySelector(".change-color"),
};

refs.widgetBtn.addEventListener("click", onClickChangeBgc);

function onClickChangeBgc(event) {
  refs.widgetText.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
