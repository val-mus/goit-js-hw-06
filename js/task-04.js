let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function onIncrementBtnClick(event) {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
